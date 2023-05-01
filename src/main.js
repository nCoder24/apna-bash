const fs = require("fs");
const {redirect, initializeState} = require("../lib/processHandler.js");
const {run} = require("./interpreter.js");
const {parse} = require("./parser.js");

const main = function() {
  const scriptFile = process.argv[2];

  if(!fs.existsSync(scriptFile)) {
    console.error("file not exists");
    process.exit(1);
  }

  const script = fs.readFileSync(scriptFile, "utf-8");
  const executableScript = parse(script);

  const {consoles} = run(executableScript, initializeState());

  redirect(consoles);
}

main();
