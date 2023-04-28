const parseLine = function(executableScript, line) {
  const delimeterPattern = /[ \t]{1,}/;

  const [cmd, ...args] = line.trim().split(delimeterPattern);

  return [...executableScript, {cmd, args}];
}

const parse = function(sourceCode) {
  return sourceCode.trim().split("\n").reduce(parseLine, []);
}

exports.parse = parse;
