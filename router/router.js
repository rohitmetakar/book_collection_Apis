const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')
const verifyToken = require('../auth/middleware')


router.post('/userRegister', controller.userRegistration);

router.post('/login', controller.login)

router.post('/books', verifyToken, controller.addBooks)

router.get('/getBooks', verifyToken, controller.getAllBooks)

router.get('/getBooks/:id', verifyToken, controller.getBook)

router.put('/updateBook/:id', verifyToken, controller.updateBook)

router.delete('/deleteBook/:id', verifyToken, controller.deleteBook)


module.exports = router;