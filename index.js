const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log(req.url)
  res.json({ title: 'Hello World' })
})

app.listen(3000, () => {
  console.log('Auth Service started at : ', 3000)
})
