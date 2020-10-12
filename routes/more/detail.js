const express = require('express'),
  router = express.Router(),
  storyctrl = require('../../controller/default/storyctrl')

router.get('/', function (req, res, next) { req.forms = "detail"; next(); },
  storyctrl.storyConfig
);

module.exports = router;