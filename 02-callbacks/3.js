const request = require("sync-request"); // it's a package to make synchronous web requests.
const fs = require("fs");

var exampleResp = request("GET", "https://example.com");
fs.writeFileSync("example.html", exampleResp.getBody());

var csjourneyResp = request("GET", "https://csjourney.com");
fs.writeFileSync("csjourney.html", csjourneyResp.getBody());
