const express = require('express')
const app = express()
const mongoose = require('mongoose')
const TemplateRouter = require('./routes/template')
const api = require('./middleware/api.js')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1:27017/template', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(api)

app.use('/xhr/v1/', TemplateRouter)


app.listen(3030, () => {
    console.log('express server is running at http://localhost:3030')
})