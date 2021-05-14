const router = require('express').Router()
const postCtrl = require('../controllers/postCtrl')
const auth = require('../middleware/auth')

router.route('/posts')
    .post(auth, postCtrl.createPost)
    .get(auth, postCtrl.getPosts)

router.route('/post/:id')
    .patch(auth, postCtrl.updatePost)
    .get(auth, postCtrl.getPost)
    .delete(auth, postCtrl.deletePost)

router.patch('/post/:id/like', auth, postCtrl.likePost)

router.patch('/post/:id/unlike', auth, postCtrl.unLikePost)

router.get('/user_posts/:id', auth, postCtrl.getUserPosts)

router.get('/post_discover', auth, postCtrl.getPostsDicover)

router.patch('/savePost/:id', auth, postCtrl.savePost)

router.patch('/unSavePost/:id', auth, postCtrl.unSavePost)

router.get('/getSavePosts', auth, postCtrl.getSavePosts)


module.exports = router