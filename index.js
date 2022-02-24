const express = require('express')
const app = express()
const port = 6006
const axios = require('axios')
const cors = require('cors')

app.use(cors())

app.use(async (req, res) => {
    const path = req.originalUrl
    const response = await axios.get('https://openaccess-api.clevelandart.org' + path)
    res.json(response.data)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})