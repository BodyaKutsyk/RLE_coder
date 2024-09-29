/* eslint-disable no-console */
'use strict';

const http = require('http');
const fs = require('fs');
const { formatHex } = require('./utils/formatHex');
const { RLEMethod } = require('./utils/RLEMethod');
const { RLEMethodUnbuffered } = require('./utils/RLEMethodUnbuffered');

const PORT = process.env.PORT || 3000;
const BASE = `http://localhost:${PORT}`;

const server = http.createServer((req, res) => {
  try {
    const fileData = fs.readFileSync('./public/cat.jpg', 'hex');
    const [hex, formatedHex] = formatHex(fileData);
    const compactedData = RLEMethod(hex.match(/.{2}/g));
    const compactedUnbuffered = RLEMethodUnbuffered(hex.match(/.{2}/g));

    const output = JSON.stringify({
      formatedHex,
      RLE_Method: compactedData,
      UnbufferedRLE_Method: compactedUnbuffered,
    });
    res.setHeader('content-type', 'application/json');

    fs.writeFileSync('src/output.json', output);

    res.end(output);
    return;
  } catch (err) {
    console.log(err);
    res.statusCode = 404;
    res.end('No such a file!');
  }
  res.statusCode = 200;
  res.end('Hello!');
});

server.listen(PORT, () => {
  console.log(`Server is running on ${BASE}`);
});
