require('dotenv').config()
const express = require('express')
const db = require('./db/index')
const cors = require('cors')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const router = require('./src/routes')


const app = express()
const port = process.env.PORT || 7500

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
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


app.post('/signup', async (req, res) => {
    const { name, age, email, password } = req.body

    if (
        name == null ||
        email == null ||
        password == null ||
        age == null
    ) {
        return res.sendStatus(403)
    }

    try {
        const hashedPassword = bcrypt.hashSync(password, 10)
        const data = await db.query(
            'INSERT INTO users (name, age, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, age, email, hashedPassword]
        )

        if (data.rows.length === 0) {
            res.sendStatus(403)
        }
        const user = data.rows[0]

        req.session.user = {
            id: user.id,
            name: user.name,
            age: user.age,
            email: user.email,
        }

        res.status(200).json({
            user: req.session.user 
        })

    } catch (err) {
        console.error(err)
        res.sendStatus(403)
    }
})


app.post('/login', async (req, res) => {
    const { email, password } = req.body

    if (email == null || password == null) {
        return res.sendStatus(403)
    }

    try {
        const data = await db.query(
            'SELECT id, name, age, email, password FROM users WHERE email = $1',
            [email]
        )

        if (data.rows.length === 0) {
            return res.sendStatus(403)
        }
        const user = data.rows[0]

        const matches = bcrypt.compareSync(password, user.password)
        if (!matches) {
            return res.sendStatus(403)
        }

        req.session.user = {
            id: user.id,
            name: user.name,
            age: user.age,
            email: user.email,
        }

        res.status(200).json({ 
            user: req.session.user 
        })

    } catch (err) {
        console.error(err)
        res.sendStatus(403)
    }
})

app.post('/logout', async (req, res) => {
    try {
        await req.session.destroy()
        res.clearCookie('connect.sid', {path: '/'})
        return res.sendStatus(200)
    } catch (err) {
        console.error(err)
        return res.sendStatus(500)
    }
})



app.post('/fetch-user', async (req, res) => {
    if (req.sessionID && req.session.user) {
        res.status(200)
        return res.json({ 
            user: req.session.user 
        })
    }
    return res.sendStatus(403)
})


app.get('/categorys', async(req,res)=>{
    try {
        const categorys = await db.query('select * from categorys;')
        res.status(200).json({
            len : categorys.rowCount,
            categorys : categorys.rows
        })
    } catch (error) {
        res.status(404)
    }
})


/* app.use('/api/posts',router) */

app.listen(port, () => console.log(`Example app listening on port ${port}!`))