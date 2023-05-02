const fs = require("fs");
const {toAbsolutePath, resolvePath} = require("../lib/pathHandler.js");

const pwd = function(env) {
  return {
    env, 
    output: env.pwd, 
  };
}

const ls = function(env, ...paths) {
  const listEntries = function(path) {
    return fs.readdirSync(toAbsolutePath(path, env.pwd)).join("\t");
  }

  if(paths.length <= 1) {
    return { env, output: listEntries(paths[0] || env.pwd) }
  }

  let lists = paths.map(function(path) {
    return `${path}:\n${listEntries(path)}`;
  });

  return { env, output: lists.join("\n\n") };
}

const cd = function(env, directoryPath) {
  const potentialPwd = resolvePath(toAbsolutePath(directoryPath, env.pwd));

  if(!fs.existsSync(potentialPwd)) {
    return {
      env,
      error: `cd: invalid directory path: ${directoryPath}`
    }
  }

  return {
    env: {pwd: potentialPwd},
  }
}

exports.ls = ls;
exports.pwd = pwd;
exports.cd = cd;
