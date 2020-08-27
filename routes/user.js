const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth.js');

const {
  userById,
  read,
  update,
  purchaseHistory,
} = require('../controllers/user');

//requireSignin: You have to be have a token
//isAuth: It has to be your token
//isAdmin: You have to be the admin not regular user

//This route is to check other users but can only be accessible to only loggedin users
router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.get('/user/:userId', requireSignin, isAuth, read);
router.put('/user/:userId', requireSignin, isAuth, update);
router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);

//All we want to take is the parameter
router.param('userId', userById);

module.exports = router;
