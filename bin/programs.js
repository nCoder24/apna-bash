const fs = require("fs");

const pwd = function(env) {
  return {
    env, 
    output: env.pwd, 
    error: ""
  };
}

const ls = function(env, ...directories) {
  const fileEntries = fs.readdirSync(env.pwd);

  return {
    env, 
    output: fileEntries.join("\t"),
    error: ""
  };
}

const cd = function(env, directory) {
  if(!fs.existsSync(`${env.pwd}/${directory}/`)) {
    return {
      env,
      output: "",
      error: "cd: invalid directory"
    }
  }

  return {
    env: {pwd: `${env.pwd}/${directory}`},
    output: "",
    error: "",
  }
}

exports.ls = ls;
exports.pwd = pwd;
exports.cd = cd;
