// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, arr, arg) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== void 0) {
      arr.unshift("404"); 
    }
   return arr[i];
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
