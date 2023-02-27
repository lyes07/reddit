const {Router} = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.send('GET request to the homepage')
})


module.exports = router