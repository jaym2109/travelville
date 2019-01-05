const express = require('express');
const app = express();
const path = require('path');

const port = 3000 || process.env.PORT;

app.use(express.static(__dirname + '/client'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(port, () => console.log(`The application is running on ${port}`));
