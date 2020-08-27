const express = require('express');
const router = express.Router();

const { create, categoryById, update, read, remove, list } = require('../controllers/category');

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user.js');

router.get('/category/:categoryId', read);
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
// router.put('/category/:categoryUpdateId/:userId', requireSignin, isAuth, isAdmin, update);
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);

router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);
//All we want to take is the parameter//Anytime there is a userId in the route, userById runs

router.get('/categories', list)


router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
