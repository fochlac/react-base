module.exports = {
	root: (req, res) => {
		res.json({message: 'Connected!'});
	},
	hallo: (req, res) => {
		res.json({message: `Hallo ${req.query.name}.`});
	}
}