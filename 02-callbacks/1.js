const fs = require("fs");

fs.writeFile(
  "callbackexample.txt",
  "This is an example of a callback",
  function(err) {
    if (!err) {
      console.log("Successfully finished the task");
    } else {
      console.log("Something went wrong.");
    }
  }
);

console.log("hopefully runs after the file write.");
