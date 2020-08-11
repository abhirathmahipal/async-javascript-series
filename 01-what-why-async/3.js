const fs = require("fs");
const axios = require("axios");

console.time("file write");
fs.writeFile("example.txt", "This is an example", function(err) {
  console.timeEnd("file write");
});

console.time("million squares");
for (let i = 0; i < 1000000; i++) {
  let square = i * i;
}
console.timeEnd("million squares");

console.time("axios call");
axios.get("https://example.com").then(res => {
  console.timeEnd("axios call");
});
