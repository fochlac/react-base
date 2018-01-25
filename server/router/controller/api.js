const storage = require(global.server + 'modules/storage'),
	commentStorage = storage.getCollection('comments'),
	userStorage = storage.getCollection('users'),
	postStorage = storage.getCollection('posts');



module.exports = {
	getPosts: (req, res) => {
		res.status(200).send('Success!');
	},
	postNewPost: (req, res) => {
		if (req.body.post) {
			res.status(200).json(req.body.post);
		}
		res.status(400).send('GIEF PROPER DATA!!!!11!!1');
	},
	createComment: (req, res) => {
		let {insertId, newObj} = commentStorage.addItem(req.body);
		let user = userStorage.getById(req.body.user);
		let post = postStorage.getById(req.body.post);

		if (user.comments) {
			user.comments.push(insertId);
		} else {
			user.comments = [insertId];
		}
		if (post.comments) {
			post.comments.push(insertId);
		} else {
			post.comments = [insertId];
		}

		userStorage.setById(user.id, user);
		postStorage.setById(post.id, post);

		res.status(200).json(newObj);
	},
	getComments: (req, res) => {
		res.status(200).json(commentStorage.getAll());
	}
}