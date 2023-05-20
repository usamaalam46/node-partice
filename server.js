const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//Delete request:
app.delete('/', function (req, res) {
  res.send('DELETE request to homepage')
})
//Post request
app.post('/', function (req, res) {
  res.send('POST request to homepage')
})
//Put request-for changing the whole resource && Patch- for changing the partial resource
app.put('/', function (req, res) {
  res.send('PUT request to homepage')
})
