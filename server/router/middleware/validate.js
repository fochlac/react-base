const log = require(global.server + 'modules/log');

module.exports = (type, options) => {
	return (req, res, next) => {
		let param,
			valid = true,
			payload = req[type],
			invalidParams = [];

		for (param in options) {
			if (typeof options[param] !== 'string' && !options[param].test(payload[param])) {
				valid = false;
				invalidParams.push(param);
			} else if (options[param] === 'object' && typeof payload[param] !== 'object') {
				valid = false;
				invalidParams.push(param);
			} else if (options[param] === 'array' && !Array.isArray(payload[param])) {
				valid = false;
				invalidParams.push(param);
			} else if (options[param] === 'jsonString') {
				try {
					JSON.parse(payload[param]);
				}
				catch(err) {
					valid = false;
					invalidParams.push(param);
				}
			}
			log(6, `Validating ${param}: '${payload[param]}' against RegExp ${options[param]}, result ${(typeof options[param] === 'string') ? valid : options[param].test(payload[param])}`);
		}
		if (valid) {
			next();
		} else {
			log(4, 'Invalid Request.', payload);
			res.status(400).send({type: 'Invalid_Request', data: invalidParams});
		}
	}
}