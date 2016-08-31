var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  
  var a=req.query.a;
  var b=req.query.b;
  var c=req.query.c;
  
  
  delta=(b*b)-(4*a*c);
  
  
  if(delta<0)
  {
  
  res.json({'statue':-1,'message':'no solution'});
  }
  else
  {
  if(delta==0){
  delta=Math.sqrt(delta);
  x1=(-b-delta)/(2*a);
  res.json({'statue':0,'message':'one solution','x':x1});
  }
  
  else{
   delta=Math.sqrt(delta);
  x1=(-b-delta)/(2*a);
  x2=(-b+delta)/(2*a);
  res.json({'statue':1,'message':'two solution','x':x1,'y':x2});
  }
 
 } 
  
});

module.exports = router;

