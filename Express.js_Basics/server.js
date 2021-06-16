const express = require('express');
const app=express();
const bodyParser=require('body-parser');

app.use((req,res,next)=>{
    console.log("middleware");
    next();
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    //res.send('hello')
    const user={
        name:'Twesha',
        hobby:'Dancing'
    }
    res.send(user);
})

app.post('/profile',(req,res)=>{
    console.log(req.body);
    const user={
        name:'Twesha',
        hobby:'Dancing'
    }
    res.send(user);
})
app.listen(3000);