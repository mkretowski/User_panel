const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if (!req.user) {
    res.redirect('/no-permission');
  } else {
    next();
  }
};

router.get('/logged', isLogged, (req, res) => {
  res.render('logged', {
    name: req.user?.displayName,
    image: req.user?.photos[0]?.value,
  });
});

router.get('/profile', isLogged, (req, res) => {
  res.send('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.send('profile settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;
