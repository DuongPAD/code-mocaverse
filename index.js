const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3333;

app.use(bodyParser.json());

let itemList = [
  "SB7PAPYZLE",
  "XZ4FHMWLJ1",
  "QSPJZ46JHZ",
  "TV4YJ4ZDFB",
  "4NQM5NHE1M",
  "KW5NPH424F",
  "4HH5PX9SZJ"
];


app.get('/getCode', (req, res) => {
    if (itemList.length > 0) {
      const firstItem = itemList.shift();
      res.send(firstItem);
    } else {
      res.status(404).send('Danh sách trống');
    }
});

app.post('/addCode', (req, res) => {
  const newItem = req.body.item;
  if (typeof newItem === 'string' && newItem.length === 10) {
    itemList.push(newItem);
    res.send('Code đã được thêm vào danh sách');
  } else {
    res.status(400).send('Yêu cầu code có độ dài 10 kí tự');
  }
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});