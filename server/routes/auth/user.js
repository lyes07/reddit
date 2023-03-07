const express = require('express')
const router = express.Router()

router.post('/fetch-user', async (req, res) => {
    if (req.sessionID && req.session.user) {
        res.status(200)
        return res.json({ 
            user: req.session.user 
        })
    }
    return res.sendStatus(403)
})
