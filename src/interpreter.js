const utils = require("../lib/utils.js");

const evaluate = function(state, line) {
  const program = utils[line.cmd];

  if(!program) {
    console.error(`command not found: ${line.cmd}`);
    return currentEnv;
  }

  const {output, error, env} = program(state.env, ...line.args);

  return {
    env, 
    consoles: state.consoles.concat({output, error})
  }
}

const run = function(script, state) {
  return script.reduce(evaluate, state);
}

exports.run = run;
