const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use('/api', routes)
app.use('/api/albums', routes)

app.get('/middleware', (req, res, next) => {})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
