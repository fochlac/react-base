const   mysql           = require('mysql')
    ,   config          = require('../config.js')
    ,   log             = require(config.server + 'modules/log');

let db = mysql.createPool({
  host     : config.mysql.host,
  port     : config.mysql.port,
  user     : config.mysql.user,
  password : config.mysql.pass
  database : config.mysql.db
});

module.exports = () => new Promise((resolve, reject) => {
  db.getConnection((err, connection) => {
    if (err) {
      log(2, 'modules/db/index:1', err);
      reject();
    }
    resolve(connection);
  });
});