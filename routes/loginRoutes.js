const router = require('express').Router()
const controller= require ('../controller/loginController')

router.post('/register', controller.register_post);
router.post('/login', controller.login_post);
router.post('/userData', controller.userData);



module.exports = router