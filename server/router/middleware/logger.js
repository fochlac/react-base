const log = require(global.server + 'modules/log');

module.exports = (req, res, next) => {
    log(6, 'request to url \'' + req.url + '\'.');
    next();
}