const fs = require("fs");

const pwd = function(env) {
  return {
    env, 
    output: env.pwd, 
  };
}

const ls = function(env, ...directories) {
  const fileEntries = fs.readdirSync(env.pwd);

  return {
    env, 
    output: fileEntries.join("\t"),
  };
}

const cd = function(env, directory) {
  if(!fs.existsSync(`${env.pwd}/${directory}/`)) {
    return {
      env,
      error: "cd: invalid directory"
    }
  }

  return {
    env: {pwd: `${env.pwd}/${directory}`},
  }
}

exports.ls = ls;
exports.pwd = pwd;
exports.cd = cd;
