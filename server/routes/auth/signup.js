const express = require('express')
const router = express.Router()
const db = require('../db/index')
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

const upload = multer({ dest: 'uploads/' });

cloudinary.config({
  cloud_name : process.env.CLOUD_NAME,
  api_key : process.env.API_KEY,
  api_secret : process.env.API_SECRET,
});

router.post('/upload-image', upload.single('image'), async (req, res) => {
    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      res.json(result); // res.data.secure_url
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });


router.post('/signup', async (req, res) => {
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



module.exports = router
