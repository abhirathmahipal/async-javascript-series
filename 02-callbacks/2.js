const request = require("request");
const fs = require("fs");

request("https://example.com", function(err, res, body) {
  // body of the first callback function
  if (err) {
    return console.log("something went wrong", err);
  }

  fs.writeFile("example.html", body, function(err) {
    // body of the second callback function
    if (err) return console.log("Something went wrong while writing to file.");
    console.log("Successfully written");

    request("https://csjourney.com", function(err, res, body) {
      // body of the third callback function
      if (err) {
        return console.log("could not talk to csjourney.com");
      }

      fs.writeFile("csjourney.html", body, function(err) {
        // body of the fourth callback function
        if (err) return console.log("Something went wrong.");
        console.log("csjourney successfully written to file.");
      });
    });
  });
});
