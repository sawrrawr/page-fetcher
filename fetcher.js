const url = process.argv[2];
const filePath = process.argv[3];
const request = require("request");
const fs = require("fs");

request(url, (error, response, body) => {
  if (error) return error;

  if (response.statusCode !== 200) {
    console.log(`Error, status code: ${response.statusCode}`);
  }
  if (!filePath.includes('./') && !filePath.includes('.html')){
    console.log(`Please enter a valid file path`);
    return;
  }

  fs.writeFile('./index.html', body, error => {
    if (error) return error;
  });
  console.log(`File downloaded and saved to ${filePath}.`);

});
