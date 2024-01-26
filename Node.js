const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;

app.get('/data', (req, res) => {
  const fileName = req.query.n;
  const lineNumber = req.query.m;

  if (!fileName) {
    return res.status(400).send('File name (n) is required.');
  }

  const filePath = `/tmp/data/${fileName}.txt`;

  if (lineNumber) {
    // Return specific line
    const lineContent = getFileLine(filePath, lineNumber);
    res.send(lineContent);
  } else {
    // Return entire file content
    const fileContent = getFileContent(filePath);
    res.send(fileContent);
  }
});

function getFileLine(filePath, lineNumber) {
  const content = fs.readFileSync(filePath, 'utf-8').split('\n');
  return content[lineNumber - 1] || 'Line not found.';
}

function getFileContent(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
