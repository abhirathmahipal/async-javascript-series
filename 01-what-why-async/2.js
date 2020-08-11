const axios = require("axios");

// this is a promise, ignore the syntax for now.
// we'll dive deeper in video 3 :)

axios.get("https://example.com").then(res => {
  console.log(res.data);
});

console.log("last line");
