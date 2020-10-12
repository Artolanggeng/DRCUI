const express = require('express'),
  router = express.Router(),
  storyctrl = require('../../controller/default/storyctrl'),
  Storyblok = require('../../utils/storycon').Storyblok

router.get('/', function (req, res, next) { req.forms = "home"; next(); },
  storyctrl.storyConfig
);

// get clear cache
router.get('/clear_cache', function (req, res) {
  Storyblok.flushCache();
  res.send('Cache flushed!');
});

router.get('/home', function (req, res, next) { req.forms = "home"; next(); },
  storyctrl.storyConfig
);

module.exports = router;
