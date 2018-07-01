var express = require('express')
    , app = express()
    , crypto  = require('crypto')
    , Sequelize = require('sequelize')
    , config = require('../config.json')
    , shasum  = crypto.createHash('sha1');

const db = new Sequelize(
  config.database.database, 
  config.database.username, 
  config.database.password, {
    host: config.database.host,
    dialect: 'mysql'
});

const queryConfig = {
  plain: false,
  raw: false,
  type: Sequelize.QueryTypes.SELECT
}

function getAccountInfo(id, callback) { 
  const sql_query = `SELECT id, username, email, locked, online, expansion, joindate FROM auth.account WHERE id = '${id}'`;
  db.query(sql_query, queryConfig).then(data => {
    callback(data)
  })
  .catch(err => {
    callback(err);
  });
}

function register(email, username, password, callback) {
  shasum.update(`${username.toUpperCase()}:${password.toUpperCase()}`);
  var sha_pass_hash = shasum.digest('hex').toUpperCase();
  const sql_query = `INSERT INTO auth.account(username,sha_pass_hash,email, locked, expansion)`;
  const sql_query_values = `VALUES ('${username}', '${sha_pass_hash}', '${email}', '0', '2')`;
  db.query(`${sql_query} ${sql_query_values}`).then(data => {
    callback(data)
  })
  .catch(err => {
    callback(err);
  });
}

function isExistingEmail(email, callback) { 
  const sql_query = `SELECT id FROM auth.account WHERE email = '${email}'`;
  db.query(sql_query, queryConfig).then(data => {
    callback(data)
  })
  .catch(err => {
    callback(err);
  });
}

function isExistingUsername(username, callback) { 
  const sql_query = `SELECT id FROM auth.account WHERE username = '${username}'`;
  db.query(sql_query, queryConfig).then(data => {
    callback(data)
  })
  .catch(err => {
    callback(err);
  });
}

function resetPassword(username, existingPassword, newPassword, callback) { 
  shasum.update(`${username.toUpperCase()}:${existingPassword.toUpperCase()}`);
  var old_pass_hash = shasum.digest('hex').toUpperCase();
  
  shasum.update(`${username.toUpperCase()}:${newPassword.toUpperCase()}`);
  var new_pass_hash = shasum.digest('hex').toUpperCase();

  const sql_query = `UPDATE set sha_pass_hash = '${new_pass_hash}' WHERE username = '${username}' AND sha_pass_hash = '${old_pass_hash}'`;
  db.query(sql_query, queryConfig).then(data => {
    callback(data)
  })
  .catch(err => {
    callback(err);
  });
}

module.exports = {
  getAccountInfo: getAccountInfo,
	register: register,
	resetPassword: resetPassword,
  isExistingEmail: isExistingEmail,
  isExistingUsername: isExistingUsername
};