const {describe, it} = require("node:test");
const {strictEqual} = require("assert");
const {ls, pwd, cd} = require("../bin/programs.js");

describe("Commsnds", function() {
  it("should output the pwd", function() {
    strictEqual(
      "tmp",
      pwd({pwd: "tmp"}).output
    );
  });

  it("should output list of fileEntries", function() {
    strictEqual(
      "a\tb\tc\tdir",
      ls({pwd: "tmp"}).output
    );
  });

  it("should change pwd", function() {
    strictEqual(
      "./tmp",
      cd({pwd: "."}, "tmp").env.pwd
    );
  });
});
