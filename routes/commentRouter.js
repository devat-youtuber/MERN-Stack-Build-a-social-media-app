const router = require('express').Router()
const commentCtrl = require('../controllers/commentCtrl')
const auth = require('../middleware/auth')

router.post('/comment', auth, commentCtrl.createComment)

router.patch('/comment/:id', auth, commentCtrl.updateComment)

router.patch('/comment/:id/like', auth, commentCtrl.likeComment)

router.patch('/comment/:id/unlike', auth, commentCtrl.unLikeComment)

router.delete('/comment/:id', auth, commentCtrl.deleteComment)



module.exports = router