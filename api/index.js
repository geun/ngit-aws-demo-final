const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/healthz', (req, res) => {
  res.send({message: 'ok'}).stauts(200)
})

app.get('/v1/api/users/me', (req, res) => {
  res.send({me: {name: "ken"}}).stauts(200)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
