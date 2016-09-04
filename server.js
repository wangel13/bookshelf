const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const databuffer = JSON.parse(fs.readFileSync('db/books.json', 'utf8'));

const app = express();

app.use(bodyParser.json());

app.set('port', (process.env.API_PORT || 3001));
app.get('/api/books', (req, res) => {
  res.json(databuffer);
});

app.post('/api/addbook', (req, res) => {
  databuffer.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(databuffer);
  res.end();
});

app.post('/api/editbook', (req, res) => {
  databuffer.forEach((item, i, arr) => {
    if(item.id == req.body.id) {
      arr[i] = req.body;
    }
  })
  res.setHeader('Content-Type', 'application/json');
  res.send(databuffer);
  res.end();
});

app.post('/api/delbook', (req, res) => {
  databuffer.forEach((item, i, arr) => {
    if(item.id == req.body.id) {
      arr.splice(i, 1);
    }
  })
  res.setHeader('Content-Type', 'application/json');
  res.send(databuffer);
  res.end();
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
