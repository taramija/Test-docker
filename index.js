//Load express module with `require` directive
var express = require('express')
var app = express()
//Define request response in roor URL (/)
app.get('/a', function (req, res) {
 res.send('Hello World! test reset hard F3')
 })
//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})