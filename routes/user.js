const {Router}  = require('express')
const {usersGet, userPost, userPut, userDelete} = require('../controllers/user')

const router = Router()

router.get('/', usersGet)
router.put('/:id', userPut)
router.post('/', userPost)
router.delete('/', userDelete)

module.exports = router