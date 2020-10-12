const express = require('express'),
  router = express.Router(),
  storyctrl = require('../../controller/default/storyctrl')

router.get('/', function (req, res, next) { req.forms = "global"; next(); },
  storyctrl.storyConfig
);

module.exports = router;
