const express = require('express')
const app = express()
var path = require('path');
var bodyParser = require('body-parser')
const port = 3000
var writeGood = require('write-good');
// parse application/json
app.use(bodyParser.json())

//default route
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')))

//recieve text and detect English
app.post('/getResult', function(req, res, next) {
    console.log(req.body.nnmTextArea)
    var suggestions = writeGood(req.body.nnmTextArea);
    console.log(suggestions)
    res.send(suggestions);
  });
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))