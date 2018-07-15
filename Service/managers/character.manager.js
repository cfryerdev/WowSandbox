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

const queryConfig = {
  plain: false,
  raw: false,
  type: Sequelize.QueryTypes.SELECT
}

// GET CHARACTERS BY ACCOUNT ID
// ==================================================

function getCharactersByAccountId(realmId, callback) {
    const sql_query = `
        SELECT 
            c.guid as id, c.name, c.level, c.race, c.class, c.gender, c.money 
        FROM characters.characters c 
        WHERE c.account = '${realmId}'`;
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
    const sql_query = `
        SELECT 
            c.guid as id, c.name, c.level, c.race, c.class, c.gender, c.money 
        FROM characters.characters c 
        WHERE c.guid = '${realmId}'`;
    db.query(sql_query, queryConfig).then(data => {
        callback(data, 200);
    })
    .catch(err => {
        callback(err, 500);
    });
}

// TRANSFER CHAR FROM ONE REALM TO ANOTHER
// ==================================================

function transferCharacterByIdAndRealmId(accountId, realmId, callback) {
    const sql_query = `
        UPDATE auth.realmcharacters
        SET realmid = '${realmId}' 
        WHERE acctid = '${accountId}' `;
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
    getCharacterById: getCharacterById,
    transferCharacterByIdAndRealmId: transferCharacterByIdAndRealmId
};