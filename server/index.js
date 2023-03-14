require('dotenv').config()
const express = require('express')
const db = require('./db/index')
const cors = require('cors')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const categorysRoute = require('./routes/categorys')
const logRoute = require('./routes/auth/log')


const app = express()
const port = process.env.PORT || 7500

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin: "http://127.0.0.1:5173",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
}))


const store = new (require('connect-pg-simple')(session))()
app.use(
      session({
          store: store,
          secret: process.env.SESSION_SECRET,
          saveUninitialized: false,
          resave: false,
          cookie: {
              secure: false,
              httpOnly: false,
              sameSite: false,
              maxAge: 1000 * 60 * 60 * 24,
          },
      })
      )


// get all the categorys for the side bar
app.use('/api/v1/categorys',categorysRoute) 

app.use('/api/v1/auth',logRoute) 


app.listen(port, () => console.log(`server listening on port ${port}!`))