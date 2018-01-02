const routes = require('express').Router()
	,	validate = require(global.server + 'router/middleware/validate.js')
	,	apiController = require(global.server + 'router/controller/api.js');

routes.get('/', apiController.root);

routes.get('/hallo', validate('query', {
	name: /[A-Za-z\s]{2,25}/
}), apiController.hallo);

module.exports = routes;