var express = require('express')
    , app = express()
    , crypto  = require('crypto')
    , Sequelize = require('sequelize')
    , SqlString = require('sqlstring')
    , config = require('../config.json');

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

// LOGIN
// ==================================================

function login(username, password, callback) { 
  var shasum  = crypto.createHash('sha1')
  shasum.update(`${username.toUpperCase()}:${password.toUpperCase()}`);
  var sha_pass_hash = shasum.digest('hex').toUpperCase();

  const sql_query = `SELECT id, username, email FROM auth.account WHERE username = '${username}' AND sha_pass_hash = '${sha_pass_hash}'`;
  db.query(sql_query, queryConfig).then(data => {
    if (data.length === 0) {
      callback("The username and password combination is not correct.", 401);
    }
    else {
      var model = {
        id: data[0].id,
        email: data[0].email,
        username: data[0].username,
        isAuthenticated: true,
      };
      callback(model, 200);
    }
  })
  .catch(err => {
    callback(err, 500);
  });
}

// GET ACCOUNT INFO
// ==================================================

function getAccountInfo(id, callback) { 
  const sql_query = `SELECT id, username, email, locked, online, expansion, joindate FROM auth.account WHERE id = '${id}'`;
  db.query(sql_query, queryConfig).then(data => {
    callback(data, 200);
  })
  .catch(err => {
    callback(err, 500);
  });
}

// REGISTER
// ==================================================

function register(email, username, password, callback) {
  var shasum  = crypto.createHash('sha1')
  shasum.update(`${username.toUpperCase()}:${password.toUpperCase()}`);
  var sha_pass_hash = shasum.digest('hex').toUpperCase();
  const sql_query = `INSERT INTO auth.account(username,sha_pass_hash,email, locked, expansion)`;
  const sql_query_values = `VALUES ('${username.toUpperCase()}', '${sha_pass_hash}', '${email}', '0', '2')`;
  db.query(`${sql_query} ${sql_query_values}`).then(data => {
    callback(data, 200);
  })
  .catch(err => {
    callback(err, 500);
  });
}

// IS EXISTING EMAIL
// ==================================================

function isExistingEmail(email, callback) { 
  const sql_query = `SELECT id FROM auth.account WHERE email = '${email}'`;
  db.query(sql_query, queryConfig).then(data => {
    callback(data, 200);
  })
  .catch(err => {
    callback(err, 500);
  });
}

// IS EXISTING USERNAME
// ==================================================

function isExistingUsername(username, callback) { 
  const sql_query = `SELECT id FROM auth.account WHERE username = '${username}'`;
  db.query(sql_query, queryConfig).then(data => {
    callback(data, 200);
  })
  .catch(err => {
    callback(err, 500);
  });
}

// RESET PASSWORD
// ==================================================

function resetPassword(username, oldPassword, newPassword, callback) { 
  var shasum  = crypto.createHash('sha1')
  shasum.update(`${username.toUpperCase()}:${oldPassword.toUpperCase()}`);
  var old_pass_hash = shasum.digest('hex').toUpperCase();
  
  var shasum  = crypto.createHash('sha1')
  shasum.update(`${username.toUpperCase()}:${newPassword.toUpperCase()}`);
  var new_pass_hash = shasum.digest('hex').toUpperCase();

  const sql_query = `UPDATE auth.account set v = NULL, s = NULL, sha_pass_hash = '${new_pass_hash}' WHERE username = '${username}' AND sha_pass_hash = '${old_pass_hash}'`;
  db.query(sql_query, queryConfig).then(data => {
    callback(data, 200);
  })
  .catch(err => {
    callback(err, 500);
  });
}

// ==================================================

module.exports = {
  login: login,
  getAccountInfo: getAccountInfo,
	register: register,
	resetPassword: resetPassword,
  isExistingEmail: isExistingEmail,
  isExistingUsername: isExistingUsername
};