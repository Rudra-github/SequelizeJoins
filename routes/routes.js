'use strict';

module.exports = function(app,db)
{
  /* GET home page. */
    app.get('/', function (req, res, next) {
        res.render('index', {title: 'Express'});
    });
    app.get('/listusers',function(req,res,onSuc,onErr){
      db.users.findAll({}).onSuccess(onSuc).onError(onErr);
    });
    app.get('/listgamelogs',function(req,res,next){
        db.gamelogs.findAll({}).onSuccess(onSuc).onError(onErr);
    });
};
// module.exports = router;
