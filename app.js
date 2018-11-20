const express = require('express')
const bodyParser = require('bodyparser')
const userrouter = require('./route/approute')
const mongoose = require('mongoose')
const app = express()
mongoose.connect('urlofdatabase', {'UserurlExtended': true})
.then((res) => console.log('blablabla', res))
.catch((err) => console.log('jhffjfjhfh', err))


app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/myapp', userrouter)

const port = process.env.PORT || 3000
app.listen(port, () => console.log('app running on port' + port))