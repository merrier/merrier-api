const express = require('express');
const router = express.Router();

import parse from '../parser/websites';
import cache from '../cache';
import utils from '../utils';

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

export default router;
