const programs = require("../bin/programs.js");

const execute = function(currentEnv, line) {
  const executer = programs[line.cmd];

  if(!executer) {
    console.error(`command not found: ${line.cmd}`);
    return currentEnv;
  }

  const {output, error, env} = executer(currentEnv, ...line.args);

  output && console.log(output);
  error && console.error(error);

  return env;
}

const interprete = function(script, env) {
  return script.reduce(execute, env);
}

exports.interprete = interprete;
