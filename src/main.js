const fs = require("fs");
const {interprete} = require("./interpreter.js");
const {parse} = require("./parser.js");

const createNewEnv = function() {
  return {
    pwd: process.env.PWD
  }
}

const main = function() {
  const scriptFile = process.argv[2];

  if(!fs.existsSync(scriptFile)) {
    console.error("file not exists");
    process.exit(1);
  }

  const script = fs.readFileSync(scriptFile, "utf-8");
  const executableScript = parse(script);

  interprete(executableScript, createNewEnv());
}

main();
