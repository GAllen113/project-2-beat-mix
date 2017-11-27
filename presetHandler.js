// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, arr, arg) => {
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== void 0) {
      return arr.unshift("404");
    }
    else {
      return arr.unshift("200");
    }

  switch(request){
    case 'GET':
      //code arg.push(arr[i].item);
      break;
    case 'PUT':
      //code return arr.splice(2, 0, i);
      break;
    default:
      //code return arr.unshift("400");
  }
}
    
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
