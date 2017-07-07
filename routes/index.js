var express = require('express');

var router = express.Router();
const db = require('../config/db.js');
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get('/listUsers', function (req, res, next) {
    // db.users.find({}).then();
    db.users.findAll({}).then(function (result) {
        console.log("result" + result);
        res.json(result);
    });


});
router.get('/listGameLogs', function (req, res, next) {
    db.gamelogs.find({}).then(function (result) {
        console.log("result" + result);
        res.json(result);
    });
});
router.get('/listGameLogsWithUser', function (req, res, next) {
    db.users.find({include: [{model: db.gamelogs}]})
        .then(function (result) {
            console.log("result" + result);
            res.json(result);

        });
});


module.exports = router;