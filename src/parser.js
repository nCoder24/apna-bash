const parseLine = function(executableScript, line) {
  const delimeterPattern = /[ \t]{1,}/;
  const [command, ...args] = line.trim().split(delimeterPattern);

  return [...executableScript, {command, args}];
}

const parse = function(sourceCode) {
  return sourceCode.trim().split("\n").reduce(parseLine, []);
}

exports.parse = parse;
