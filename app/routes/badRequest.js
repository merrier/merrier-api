const express = require('express');

module.exports = {
  getRouter: function() {
    var router = express.Router();
    router.get('*', (req, res) => {
      res.status(400).send('Bad Request');
    });
    return router;
  }
}
