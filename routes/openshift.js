/**
 * Created by kikimans on 2014-10-01.
 */
var express = require('express');
var openshiftClient = require('../lib/openshift/client');

var router = express.Router();

/* GET home page. */
router
    .get('/', function(req, res) {
        res.render('api-form', { title: 'Express API Test' });
    })
    .post('/', function(req, res){

        var excueteParam = {
            url : req.body.url,
            method : req.body.method,
            username : req.body.username,
            password : req.body.password,
            renderpath : 'api-result'
        };
        openshiftClient.excute(excueteParam, function(rdata){
            console.log('data : '+ rdata);
            res.render('api-result', {resultData : rdata});
        });


    });

module.exports = router;