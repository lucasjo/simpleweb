/**
 * Created by kikimans on 2014-10-01.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('join-form', { title: 'Express' });
});

module.exports = router;