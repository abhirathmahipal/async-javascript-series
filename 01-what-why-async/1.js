const fs = require("fs");

console.log("Starting file write");

fs.writeFile("example.txt", "This is an example", function(err) {
  console.log("done writing to file");
});

console.log("Last line");
