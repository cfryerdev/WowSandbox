var express = require('express')
  , crypto  = require('crypto');

function createHash(username, password) {
  var shasum  = crypto.createHash('sha1');
  shasum.update(`${username.toUpperCase()}:${password.toUpperCase()}`);
  return shasum.digest('hex').toUpperCase();
}

module.exports = {
  createHash: createHash
};