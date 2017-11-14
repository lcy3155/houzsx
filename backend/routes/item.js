var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var fs=require('fs')
var formidable=require('formidable')
var con=require('./../root.js')

//添加接口
router.post('/add', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*')
   console.log(req.body.tou+','+req.body.tx+','+req.body.i)
  con.query(`INSERT INTO list2 (img,title,txt) VALUES('${req.body.i}','${req.body.tou}','${req.body.tx}')`,function (err, rows, fields) {
    if(err) throw err;
    console.log('成功')
    res.send('上传成功')
  })
});

//上传图片
router.post('/img1', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  var form = new formidable.IncomingForm();
  form.uploadDir='public/images';  //
  form.parse(req,function(error,fields,files){   // console.log(fields)

    for (i in files){
      var file = files[i];  //保存图片属性
      var fName = (new Date()).getTime() //用时间戳来作为图片的新name
      switch(file.type){
        case 'image/jpeg':
          fName=fName+".jpg";
          break;
        case 'image/png':
          fName=fName+".png";
          break;
        case 'image/gif':
          fName=fName+".gif";
          break;
        case 'image/psd':
          fName=fName+".psd";
          break;

      }
      var newPath = 'public/images/'+fName;
      fs.renameSync(file.path,newPath);
      res.send(fName)
    }

  });
});
   //获取
router.post('/se1',function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  con.query('SELECT * FROM list2',function(err,rows)     {
    console.log(rows)
    if(err) throw err;
    res.send(rows);
  })
})

//删除
router.post('/se2',function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  con.query('DELETE FROM list2 WHERE id='+req.body.aid,function(err, rows, fields) {
    res.send(rows)
  })
});
//修改
router.post('/se3',function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"*")
  con.query('UPDATE list2 SET img="'+req.body.xg0+'",title="'+req.body.xg1+'",txt="'+req.body.xg2+'" WHERE id='+req.body.xg,function(err, rows, fields) {
    res.send(rows)
  })
});


module.exports = router;
