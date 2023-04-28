const {describe, it} = require("node:test");
const {strictEqual} = require("assert");
const {ls, pwd} = require("../lib/commands.js");

describe("Commsnds", function() {
  it("should output the pwd", function() {
    strictEqual(
      "tmp",
      pwd({pwd: "tmp"}).output
    );
  });

  it("should output list of fileEntries", function() {
    strictEqual(
      "a\tb\tc",
      ls({pwd: "tmp"}).output
    );
  });
});
