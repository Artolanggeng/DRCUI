/**
 * Created by ignat on 05-Jan-17.
 */

const StoryblokClient = require('storyblok-node-client')

let Storyblok = new StoryblokClient({
  privateToken: 'oTERs8RjYCy4Johr8dP8Bgtt',
  cache: {
    type: 'memory'
  }
})

exports.Storyblok = Storyblok;