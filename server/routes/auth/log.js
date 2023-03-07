
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
