const request = require("request");
const fs = require("fs");

request("https://example.com", function(err, res, body) {
  if (err) {
    return console.log("something went wrong", err);
  }

  fs.writeFile("example.html", body, function(err) {
    if (err) return console.log("Something went wrong while writing to file.");
    console.log("Successfully written");

    request("https://csjourney.com", function(err, res, body) {
      if (err) {
        return console.log("could not talk to csjourney.com");
      }

      fs.writeFile("csjourney.html", body, function(err) {
        if (err) return console.log("Something went wrong.");
        console.log("csjourney successfully written to file.");
      });
    });
  });
});
