const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    res.render('logout');
});

router.get('/info', (req, res) => {
    res.render('info');
});

module.exports = router;
