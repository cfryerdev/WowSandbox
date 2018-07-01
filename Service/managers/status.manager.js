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

function getAuthStatus(callback) {
  
}

function getWorldStatus(callback) {
  
}

function getRealms(callback) {
  
}

function getPopulationByRealm(realmId, callback) {
  
}

module.exports = {
  getAuthStatus: getAuthStatus,
  getWorldStatus: getWorldStatus,
  getRealms: getRealms,
  getPopulationByRealm: getPopulationByRealm
};