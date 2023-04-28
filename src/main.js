const fs = require("fs");
const {run} = require("./interpreter.js");
const {parse} = require("./parser.js");

const main = function() {
  const scriptFile = process.argv[2];

  if(!fs.existsSync(scriptFile)) {
    process.exit(1);
  }

  const script = fs.readFileSync(scriptFile, "utf-8");
  const executableScript = parse(script);

  run(executableScript);
}

main();
