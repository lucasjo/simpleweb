var https = require('https');
var url = require('url');

var options = {
    hostname : 'broker-test.ucareme.co.kr',
    port : 443,
    path : '/broker/rest/api',
    method : 'GET',
    headers : {
        'Authorization': 'Basic ' + new Buffer('kikimans@jyes.co.kr' + ':' + 'alsgh@1716').toString('base64'),
        'Accept': 'application/json'
    },
    rejectUnauthorized: false,
    agent: false
};

var openshiftClient = {
    var link;

    excute : function(excuteOption, callback){
        var resultData;
        this.setOptions(excuteOption);
        var req = https.request(options, function(res){
            res.on('data', function(data) {
                var rObj = JSON.parse(data.toString('utf-8'));
                callback(JSON.stringify(rObj));
            });
            res.on('error', function(e){
                console.log(e);
            });

            res.on('end', function(){
                console.log('call end');
            });
        });
        req.on('error', function(e){
            console.error(e);
        });
        req.end();
    }

    setOptions : function(excuteOption){
        var urlObj = url.parse(excuteOption.url);
        options.hostname = urlObj.hostname;
        options.path = urlObj.pathname;
        options.method = excuteOption.method;
        options.headers.Authorization = 'Basic ' + new Buffer(excuteOption.username + ':' + excuteOption.password).toString('base64');


    }
};

module.exports = openshiftClient;