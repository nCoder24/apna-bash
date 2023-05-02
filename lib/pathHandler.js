const isAbsPath = function(path) {
  return path.startsWith("/");
}

const parent = function(path) {
  return path.lastIndexOf("/") ? path.slice(0, path.lastIndexOf("/")) : "/";
}

const child = function(path, childPath) {
  return (path === "/"  ? "/" : `${path}/`) + childPath;
}

/* for only absolute paths */
const resolvePath = function(path) {
  return path.split("/").reduce(function(effectivePath, pathComponent) {
    if(!pathComponent || pathComponent === ".") return effectivePath;

    if(pathComponent === "..") return parent(effectivePath);

    return child(effectivePath, pathComponent);
  }, "/");
}

const expandWildCards = function(path) {
  return path;
}

const toAbsolutePath = function(path, pwd) {
  if(isAbsPath(path)) return path;
  return child(pwd, path);
}

exports.resolvePath = resolvePath;
exports.toAbsolutePath = toAbsolutePath;
