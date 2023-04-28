const fs = require("fs");

const pwd = function(env) {
  return {
    env, 
    output: env.pwd, 
    error: ""
  };
}

const ls = function(env) {
  const fileEntries = fs.readdirSync(env.pwd);

  return {
    env, 
    output: fileEntries.join("\t"),
    error: ""
  };
}

exports.ls = ls;
exports.pwd = pwd;
