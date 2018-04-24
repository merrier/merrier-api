const express = require('express');
const { name, description, version, bugs, homepage } = require('../../package.json');

module.exports = {
  getRouter: function() {
    var router = express.Router();
    router.get('/', (req, res) => {

      const json = {
        name,
        description,
        version,
        homepage,
        bugs: bugs.url,
        // docs: `${req.protocol}://${req.get('host')}${req.originalUrl}docs`
      };
      res.json(json);
    });
    return router;
  }
}