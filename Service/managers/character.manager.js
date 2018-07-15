var express = require('express')
    , app = express()
    , ps = require('ps-node')
    , Sequelize = require('sequelize')
    , config = require('../config.json');

const db = new Sequelize(
  config.database.database, 
  config.database.username, 
  config.database.password, {
    host: config.database.host,
    dialect: 'mysql'
});

//const Op = Sequelize.Op;

const queryConfig = {
  plain: false,
  raw: false,
  type: Sequelize.QueryTypes.SELECT
}

// GET CHARACTERS BY ACCOUNT ID
// ==================================================

function getCharactersByAccountId(realmId, callback) {
    const sql_query = `SELECT * FROM characters.characters where account = '${realmId}'`;
    db.query(sql_query, queryConfig).then(data => {
        callback(data, 200);
    })
    .catch(err => {
        callback(err, 500);
    });
}

// GET CHARACTER BY ID
// ==================================================

function getCharacterById(realmId, callback) {
    const sql_query = `SELECT * FROM characters.characters where id = '${realmId}'`;
    db.query(sql_query, queryConfig).then(data => {
        callback(data, 200);
    })
    .catch(err => {
        callback(err, 500);
    });
}

// ==================================================

module.exports = {
    getCharactersByAccountId: getCharactersByAccountId,
    getCharacterById: getCharacterById
};