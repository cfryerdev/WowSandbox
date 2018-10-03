var express = require('express')
  , Sequelize = require('sequelize')
  , passwordUtility = require('../utilities/password.utility')
  , databaseUtility = require('../utilities/database.utility');

const db = databaseUtility.createConfig();
const queryConfig = databaseUtility.createSelectQueryConfig();

// LOGIN
// ==================================================

function login(username, password, callback) {
  var sha_pass_hash = passwordUtility.createHash(username, password);
  const sql_query = `
    SELECT 
      a.id, a.username, a.email, ac.gmlevel 
    FROM auth.account a 
      LEFT JOIN auth.account_access ac ON ac.id = a.id 
    WHERE a.username = '${username}' AND a.sha_pass_hash = '${sha_pass_hash}' LIMIT 1`;
  db.query(sql_query, queryConfig).then(data => {
    if (data.length === 0) {
      callback("The username and password combination is not correct.", 401);
    }
    else {
      var model = {
        id: data[0].id,
        gmlevel: data[0].gmlevel,
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
  const sql_query = `
    SELECT 
      a.id, a.username, a.email, a.locked, a.online, a.expansion, a.joindate, ac.gmlevel 
    FROM auth.account a 
      LEFT JOIN auth.account_access ac ON ac.id = a.id 
    WHERE a.id = '${id}' LIMIT 1`;
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
  var sha_pass_hash = passwordUtility.createHash(username, password);
  const sql_query = `
    INSERT INTO auth.account (username,sha_pass_hash,email, locked, expansion)
    VALUES ('${username.toUpperCase()}', '${sha_pass_hash}', '${email}', '0', '2')`;
  db.query(sql_query).then(data => {
    callback(data, 200);
  })
  .catch(err => {
    callback(err, 500);
  });
}

// IS EXISTING EMAIL
// ==================================================

function isExistingEmail(email, callback) { 
  const sql_query = `
    SELECT id 
    FROM auth.account 
    WHERE email = '${email}'`;
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
  const sql_query = `
    SELECT id 
    FROM auth.account 
    WHERE username = '${username}'`;
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
  var old_pass_hash = passwordUtility.createHash(username, oldPassword);
  var new_pass_hash = passwordUtility.createHash(username, password);
  const sql_query = `
    UPDATE auth.account 
    SET v = NULL, s = NULL, sha_pass_hash = '${new_pass_hash}' 
    WHERE username = '${username}' 
      AND sha_pass_hash = '${old_pass_hash}' `;
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