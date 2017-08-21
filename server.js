const express = require('express');

const app = express();

app.use(express.static('public'));

app.post('/sendemail', (req, res) => {

  res.send('emailing');
});


const port = process.env.PORT || 7823;

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
