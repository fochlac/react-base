const api = require('express').Router()
	,	apiController = require(global.server + 'router/controller/api.js');

api.get('/comments', apiController.getComments);

api.post('/comment', (req, res, next) => {
	if (!isNaN(req.body.post) && !isNaN(req.body.user) && typeof req.body.text === 'string') {
		next();
	} else {
		res.status(400).send({msg: 'invalid options'});
	}
}, apiController.createComment);




module.exports = api;