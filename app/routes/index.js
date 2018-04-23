const express = require('express');
const router = express.Router();
import { name, description, version, bugs, homepage } from '../../package.json';

router.get('/', (req, res) => {

  const json = {
    name,
    description,
    version,
    homepage,
    bugs: bugs.url,
    docs: `${req.protocol}://${req.get('host')}${req.originalUrl}docs`
  };
  res.json(json);
});

export default router;
