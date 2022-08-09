
const port = APP_URL

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const allowCors = require('./cors')



app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(allowCors)

app.listen(process.env.PORT || port, function() {
     console.log(`Backend, running on ${port}. `);
})

module.exports = app