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

function sendMail(sender, receiver, subject, body, money, itemArray, callback) {
    // Create characters.mail 
    // Create characters.item_instance
    // Create characters.mail_items
    addMailRecord(sender, receiver, subject, body, money, (mailData) => {
        if (Array.isArray(itemArray) && itemArray.length > 0) {
            console.log(mailData);
        }
    });
}

function addItemInsance(itemId, callback) {
    const sql_query = `INSERT INTO characters.item_instance 
    (itemEntry, owner_guid, creatorGuid, giftCreatorGuid, count, duration, charges, flags, enchantments, randomPropertyId, durability, playedTime, text)
    VALUES 
    ('${itemId}','1','0','0','1','0','0 0 0 0 0 ','1','0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 ','0','0','0','')`;
    db.query(sql_query, queryConfig).then(data => {
        callback(data);
    });
}

function addMailRecord(sender, receiver, subject, body, money, callback) {
    var expireTime = getExpiredTime();
    const sql_query = `INSERT INTO characters.mail 
    (messageType, stationery, mailTemplateId, sender, receiver, subject, body, has_items, expire_time, deliver_time, money, cod, checked)
    VALUES (0, 41, 0, ${sender}, ${receiver}, '${subject}', '${body}', 1, ${expireTime}, '${new Date().valueOf()}', '${money}', 0, 4)`;
    db.query(sql_query, queryConfig).then(data => {
        callback(data);
    });
}

function addMailItemRecord(mailId, itemId, receiver, callback) {
    const sql_query = `INSERT INTO characters.mail_items (mail_id, item_guid, receiver) VALUES ('${mailId}', '${itemId}', '${receiver}') `;
    db.query(sql_query, queryConfig).then(data => { });
}

function getExpiredTime() {
    var expireTime = new Date();
    expireTime.setMonth(d.getMonth() + 1);
    expireTime.setHours(0, 0, 0);
    expireTime.setMilliseconds(0);
    return expireTime/1000|0;
}

// ==================================================

module.exports = {
    sendMail: sendMail,
    getCharacterById: getCharacterById,
    transferCharacterByIdAndRealmId: transferCharacterByIdAndRealmId
};