const express=require('express');
const app=express();
const port=3000;
const path=require('path');
const ab=require('express-handlebars');
const bodyparser=require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
let str;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb781");
  
  dbo.createCollection("customers1", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    app.use(express.static(path.join(__dirname,'public')));
    app.set('views',path.join(__dirname,'views'));
// let Content=require('./models/content');

app.get('/home',(req,res)=>{
    dbo.collection("customers1").find({}).toArray(function(err,item){
            if (item != null) {
            //  str = str + "    author " + item.author + "</br>";
            // var aa=JSON.stringify(item);
            // console.og(item);
            var auth = [];
            item.forEach(element=>{
              
              auth.push(element.author);
              // console.log(auth);
            })
            res.render('home.handlebars',{resultfind:auth});
            }
          });
          
});
app.get('/about',(req,res)=>{
  dbo.collection("customers1").find({}).toArray(function(err,item){
          if (item != null) {
          //  str = str + "    author " + item.author + "</br>";
          // var aa=JSON.stringify(item);
          // console.og(item);
          var auth = [];
          item.forEach(element=>{
            
            auth.push(element.author);
            // console.log(auth);
          })
          res.render('home.handlebars',{resultfind:auth});
          }
        });
        
});
app.get('/contactus',(req,res)=>{
  dbo.collection("customers1").find({}).toArray(function(err,item){
          if (item != null) {
          //  str = str + "    author " + item.author + "</br>";
          // var aa=JSON.stringify(item);
          // console.og(item);
          var auth = [];
          item.forEach(element=>{
            
            auth.push(element.author);
            // console.log(auth);
          })
          res.render('home.handlebars',{resultfind:auth});
          }
        });
        
});
app.get('/faq',(req,res)=>{
  dbo.collection("customers1").find({}).toArray(function(err,item){
          if (item != null) {
          //  str = str + "    author " + item.author + "</br>";
          // var aa=JSON.stringify(item);
          // console.og(item);
          var auth = [];
          item.forEach(element=>{
            
            auth.push(element.author);
            // console.log(auth);
          })
          res.render('home.handlebars',{resultfind:auth});
          }
        });
        
});
app.engine('handlebars',ab({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.get('/forms',function(req,res){
res.render('page');
});
app.get('/home',function(req,res){
    res.render('home');
    });
    app.get('/about',function(req,res){
        res.render('about');
        });
    app.get('/contactus',function(req,res){
        res.render('contact');
        });
        app.get('/faq',function(req,res){
            res.render('faq');
            });
app.post('/forms',function(req,res){
    
    var myobj = { author: req.body.author};
    // console.log(myobj);
    dbo.collection("customers1").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        
      });
    res.redirect('/forms');
    });

app.listen(port,()=>console.log('hiii'+port));

  });
});