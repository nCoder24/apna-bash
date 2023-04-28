const fs = require("fs");

const isAbsPath = function(path) {
  return path.startsWith("/");
}

const toAbsPath = function(relativePath, pwd) {
  return relativePath.split("/").reduce(function(pathComponents, dirName) {
    if(!dirName || dirName === ".") {
      return pathComponents;
    }

    if(dirName === "..") {
      return pathComponents.length > 1 ? pathComponents.slice(0, -1) :  pathComponents;
    }

    return [...pathComponents, dirName];
  }, pwd.split("/")).join("/");
}

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

const cd = function(env, directoryPath) {
  const potentialPwd = isAbsPath(directoryPath) ? directoryPath : toAbsPath(directoryPath, env.pwd);

  if(!fs.existsSync(potentialPwd)) {
    return {
      env,
      error: "cd: invalid directory path"
    }
  }

  return {
    env: {pwd: potentialPwd},
  }
}

exports.ls = ls;
exports.pwd = pwd;
exports.cd = cd;
