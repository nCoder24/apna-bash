const initializeState = function() {
  return {
    env: {
      pwd: process.env.PWD
    },
    consoles: []
  }
}

const redirect = function(consoles) { 
  consoles.forEach(function({output, error}) {
    if(output) console.log(output);
    if(error) console.error(error);
  });
}

exports.initializeState = initializeState;
exports.redirect = redirect;
