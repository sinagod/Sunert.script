//'use strict';
exports.main_handler = async (event, context, callback) => {
  try {
    for (const v of event["Message"].split("&")) {
      console.log(v);
      var request = require('request');
      delete require.cache[require.resolve('./'+v+'.js')];
      require('./'+v+'.js')
    
//     delete require.cache[require.resolve('./youth_read_IOS.js')];
//     require('./youth_read_IOS.js')
  } catch (e) {
    console.error(e)
  }
}
