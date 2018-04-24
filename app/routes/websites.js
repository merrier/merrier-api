const express = require('express');

const parse = require('../parser/websites').parser;
const cache = require('../cache');

module.exports = {
  getRouter: function() {
    var router = express.Router();
    router.get('/', (req, res) => {

      const cacheKey = `websites`;
      const timeout = 60 * 5; // 5 minutes.
    
      cache.getOrSet(cacheKey, timeout, getWebsites, function(data) {
        console.log('data-------', data);
        if (data.statusCode) {
          res.status(data.response.statusCode).send(data.response.statusMessage);
        } else {
          res.json(data);
        }
      });
    
      function getWebsites(callback) {
        parse((data) => {
          callback(data);
        });
      }
    });
    return router;
  }
}
