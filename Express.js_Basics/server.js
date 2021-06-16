const express = require('express');
const app=express();
const bodyParser=require('body-parser');

app.use((req,res,next)=>{
    console.log("middleware");
    next();
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    console.log(req.query);
    console.log(req.body);
    console.log(req.headers);
    console.log(req.params);
    res.send("getting root");
})

app.get('/:id',(req,res)=>{
    console.log(req.params);
    res.status(404).send("not found");
})


app.get('/profile',(req,res)=>{
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