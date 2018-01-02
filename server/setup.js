#!/usr/bin/env node

const   mysql = require('mysql')
    ,   config = require('./config.js');

let myDb;

function initDb() {
    let db = mysql.createConnection({
          host     : config.mysql.host,
          port     : config.mysql.port,
          user     : config.mysql.user,
          password : config.mysql.pass
        });

    db.on('error', (err) => {
        if (err){
            if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
                throw('MySQL-ConnectionError: ' + err);
            } else {
                myDb = initDb();
            }
        }
    });

    db.connect((err) => {
        if (err) {
            throw('MySQL-ConnectionError: ' + err);
        }
    });

    return db;
};

myDb = initDb();

let setup = [ ];

function setupDB() {
    myDb.query(setup[0], (err) => {
        if (err) {
            console.log(err);
            console.log(setup[0]);
            process.exit(1);
        } else {
            setup = setup.slice(1);
            if (setup.length) {
                setupDB();
            } else {
                console.log('Completed sucessfully.')
                process.exit();
            }
        }

    });
}
if (process.argv.includes('-y')) {
    setupDB();
} else {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    console.log(
    `--------------------------------------------------
    |           Setup             Server             |
    --------------------------------------------------
    |                                                |
    |                                                |
    --------------------------------------------------
    |  Bitte bestätigen Sie den Installationswunsch  |
    --------------------------------------------------
    (y/n): `.replace(/:\n/, ':'));

    process.stdin.on('data', function (text) {
        if (text === 'y\n') {
            setupDB();
        } else if (text === 'n\n') {
            process.exit()
        } else {
            console.log(
    `--------------------------------------------------
    |  Ungültige Eingabe, bitte bestätigen Sie den   |
    |              Installationswunsch               |
    --------------------------------------------------
    (y/n): `.replace(/:\n/, ':')
            );
        }
    });
}
