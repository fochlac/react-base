#!/usr/bin/env node

const   express = require('express')
    ,   app = express()
    ,   bodyparser = require('body-parser')
    ,   compression = require('compression')
    ,   xssFilter = require('x-xss-protection')
    ,   http = require('http')
    ,   fs = require('fs')
    ,   config = require('./config.js')
    ,   router = require('./router')
    ,   server_port = global.port
    ,   server_ip_address = global.host
    ,   logger = require(global.server + 'router/middleware/logger')
    ,   storage = require(global.server + 'modules/storage')
    ,   server = http.createServer(app);

server.listen(server_port, server_ip_address, () => {
    console.log('listening on port '+ server_port);
});

// middlewares to parse json and urlencoded requests, handle compression and prevent xss
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(compression());
app.use(xssFilter());
// disable x-powered-by header
app.set('x-powered-by', false);


app.use(logger);

// connect router
app.use(router);

// if not connected to a route, deliver static content
app.use('/static/', express.static(global.client + ''));

// exception for sw and manifest, needs to be in root
app.use('/sw.js', express.static(global.client + 'sw.js'));
app.use('/manifest.json', express.static(global.client + 'manifest.json'));

// if no route and no static content, redirect to index
app.use('*', (req,res)=> {
    fs.readFile(global.client + 'index.html', 'utf8', (err, content) => {
        if (err) {
            res.status(500).send();
        }

        let file = content.replace('/**DEFAULTSTORE**/','window.defaultStore=' + JSON.stringify({
            ...storage.getAllCollections(),
            app: {
                login: true,
            },
            user: {
                admin: true,
                id: 0,
            }
        }));

        res.status(200).send(file);
    });
});
