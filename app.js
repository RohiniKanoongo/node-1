// dependency //anything we have added in our project and not coded for it
//if we dont need a dependency we write //npm uninstall xyzz
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

//localhost=>127.0.0.1
//never add nodemodules to git hub
