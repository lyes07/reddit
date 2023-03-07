const express = require('express')
const router = express.Router()
const db = require('../db/index')


router.get('/', async(req,res)=>{
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

module.exports = router