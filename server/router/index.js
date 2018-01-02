const 	routes 		= require('express').Router()
    ,   api         = require('./routes/api')
    ,   timestamp   = require(global.server + 'router/middleware/timestamp');

routes.use('/api', timestamp, api);

module.exports = routes;