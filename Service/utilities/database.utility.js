var express = require('express')
  , config = require('../config.json')
  , sequelize = require('sequelize');

function createConfig() {
  return new Sequelize(
    config.database.database, 
    config.database.username, 
    config.database.password, {
      host: config.database.host,
      dialect: 'mysql'
  });
}

function createSelectQueryConfig() {
  return {
    plain: false,
    raw: false,
    type: Sequelize.QueryTypes.SELECT
  };
}

module.exports = {
  createConfig: createConfig,
  createSelectQueryConfig: createSelectQueryConfig
};