const url = require('url'),
  Storyblok = require('../../utils/storycon').Storyblok

storyConfig = async (req, res) => {
  Storyblok
    .get(`stories/${req.forms}`, {
      version: req.query._storyblok ? 'draft' : 'published'
    })
    .then((response) => {
      console.log("Isi Body -> " + JSON.stringify(response.body));
      res.render(`layouts/${req.forms}`, {
        story: response.body.story,
        params: req.query
      })
    })
    .catch((error) => {
      console.log(error)
      res.send('A ' + error.statusCode.toString() + ' error ocurred')
    })
};

module.exports = {
  storyConfig
};