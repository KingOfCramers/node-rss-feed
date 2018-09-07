// For fetching file
var https = require('https');
var fs = require('fs');

// For parsing Rss feed
const Parser = require("rss-parser");
let parser = new Parser();

/*
parser.parseURL("https://regulations.justia.com/regulations/fedreg?limit=20&mode=atom")
  .then((feed) => {

    const base = "https://docs.regulations.justia.com/entries"

    feed.items.forEach((item, i) => {

      // Parsing to find PDF...
      const str = item.link;
      let dates = str.substring(50, 60);
      let newDates = dates.replace(/\//, "-").replace(/\//, "-");
      let ending = str.substring(61).replace(".html",".pdf");
      let fullString = `${base}/${newDates}/${ending}`;
      const file = fs.createWriteStream(`${item.title}.pdf`);
      const request = https.get(fullString, (res) => {
        res.pipe(file);
      });
    });
  })
  .catch((err) => console.log(err));*/


// https://docs.regulations.justia.com/entries/2018-09-06/2018-19267.pdf
// https://regulations.justia.com/regulations/fedreg/2018/09/06/2018-19267.html

parser.parseURL('http://www.treasury.gov/resource-center/sanctions/OFAC-Enforcement/Documents/ofac.xml').then((feed) => {
  feed.items.forEach(item => {
    console.log(`${item.title}: ${item.link}`);
  })
})

/*
var file = fs.createWriteStream("file.jpg");
var request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
  response.pipe(file);
});

*/