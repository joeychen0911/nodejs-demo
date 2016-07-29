var express = require('express');
var router = express.Router();
var crypto = require('crypto');

router.get('/', function(req, res) {
  res.render('usecrypto', { title: '加密字符串示例' });
});

router.post('/',function (req,res) {
  var
  userName = req.body.txtUserName,
  userPWD = req.body.txtUserPWD;
  
  //生成口令的散列值
  var md5 = crypto.createHash('md5')
  var en_upwd = md5.update(userPWD).digest('hex');
  
  console.log('Encrypted Passowrd:' + en_upwd);
  
    res.render('usecrypto', { title: '加密字符串示例' });
});

module.exports = router;