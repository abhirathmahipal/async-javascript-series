const axios = require("axios");

axios.get("https://example.com").then(res => {
  console.log(res.data);
});

console.log("last line");
