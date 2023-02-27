require('dotenv').config()
const express = require('express')
const db = require('./db/index')
const cors = require('cors')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const router = require('./src/routes')


const app = express()
const port = process.env.PORT || 7500


app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/posts',router)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))