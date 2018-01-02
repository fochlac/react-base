const log = require(global.server + 'modules/log');


module.exports = {
	default: log,

	promise: (level, message) => {
		return (err) => {
			log(level, message, err);
		}
	},

	checkError: (level, message) => {
		return (err) => {
			if (err) {
				log(level, message, err);
			}
		}
	},

	db: {
		codeError: (...err) => {
			log(1, ...err);
			return Promise.reject();
		},
		queryError: (level, db, message) => {
			return (err) => {
				db.release();
				log(level, message, err);
			}
		}
	},

	router: {
		authError: (res, ip) => {
				log(2, 'Invalid Auth Hash from IP: ' + ip);
				log(10, 'Invalid Auth Hash: ', res);

				res.status(401).send({success: false, type: 'Authentication_Error'});
		},

		internalError: (res) => {
			return (err) => {
				log(2, 'Internal Error: ', err);
				log(10, 'Internal Error: ', res);

				res.status(500).send({success: false, type: 'Internal_Error'});
			}
		}
	}
};