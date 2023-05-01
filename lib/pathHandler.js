const isAbsPath = function(path) {
  return path.startsWith("/");
}

const parent = function(path) {
  return path.slice(0, path.lastIndexOf("/")) || "/";
}

const child = function(path, childPath) {
  if(path === "/") return `/${childPath}`;
  return `${path}/${childPath}`;
}

const resolvePath = function(path, prefixPath = "") {
  return path.split("/").reduce(function(effectivePath, pathComponent) {
    if(!pathComponent || pathComponent === ".") return effectivePath;

    if(pathComponent === "..") return parent(effectivePath);

    return child(effectivePath, pathComponent);
  }, prefixPath) || "/";
}

const absolutePath = function(path, pwd) {
  return resolvePath(path, isAbsPath(path) ? "" : pwd);
}

exports.absolutePath = absolutePath;
