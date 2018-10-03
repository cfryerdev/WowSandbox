var express = require('express')
  , Sequelize = require('sequelize')
  , ps = require('ps-node')
  , databaseUtility = require('../utilities/database.utility');

const db = databaseUtility.createConfig();
const queryConfig = databaseUtility.createSelectQueryConfig();

// GET AUTH SERVER PROC
// ==================================================

function getAuthStatus(callback) {
  ps.lookup({ command: 'authserver' }, function(err, data ) {
    callback(data, 200);
  });
}

// GET WORLD SERVER PROC
// ==================================================

function getWorldStatus(callback) {
  ps.lookup({ command: 'worldserver' }, function(err, data ) {
    callback(data, 200);
  });
}

// GET REALMS
// ==================================================

function getRealms(callback) {
  const sql_query = `
    SELECT id, name, population, address, port 
    FROM auth.realmlist;`;
  db.query(sql_query, queryConfig).then(data => {
    callback(data, 200);
  })
  .catch(err => {
    callback(err, 500);
  });
}

// GET REALM BY ID
// ==================================================

function getRealmById(realmId, callback) {
  const sql_query = `
    SELECT * 
    FROM auth.realmlist where id = '${realmId}'`;
  db.query(sql_query, queryConfig).then(data => {
    callback(data, 200);
  })
  .catch(err => {
    callback(err, 500);
  });
}

// ==================================================

module.exports = {
  getAuthStatus: getAuthStatus,
  getWorldStatus: getWorldStatus,
  getRealms: getRealms,
  getRealmById: getRealmById
};