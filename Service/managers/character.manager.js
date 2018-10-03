var express = require('express')
  , Sequelize = require('sequelize')
  , databaseUtility = require('../utilities/database.utility');

const db = databaseUtility.createConfig();
const queryConfig = databaseUtility.createSelectQueryConfig();

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