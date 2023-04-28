const programs = require("../bin/programs.js");

const execute = function(currentEnv, line) {
  const program = programs[line.command];
  if(!program) process.exit(1);

  const {output, error, env} = program(currentEnv, ...line.args);

  console.log(output);
  console.error(error);

  return env;
}

const run = function(script) {
  const env = {
    pwd: process.env.PWD
  }

  script.reduce(execute, env);
}

exports.run = run;
