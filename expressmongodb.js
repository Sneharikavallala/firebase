var http=require('http')
var express=require('express')
var mongoClient=require('mongodb').MongoClient
var app=express()
app.use(express.json())
mongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        console.log("error")
    }
    else{
        console.log("Successfully connected")
        db=client.db('employee')
    }
})
app.get('/emps',(req,res)=>{
    db.collection('emp').find().toArray((err,items)=>{
        console.log(items)
        res.write(JSON.stringify(items))
        res.end()
    })
})
app.listen(2000,()=>{
    console.log("server started at port 2000")
})
app.post('/addemp',(req,res)=>{
    console.log(req.body)
    db.collection('emp').insertOne(req.body)
   
    res.end("inserted")
})
app.put("/update/:id",(req,res)=>{
    var id=parseInt(req.params.id)
    db.collection('emp').updateOne({"_id":id},{$set:{"salary":req.body.salary}})
    res.end("updated")
})
app.delete("/delete/:id",(req,res)=>{
    var id=parseInt(req.params.id)
    db.collection('emp').deleteOne({_id:id})
    res.end("deleted")
})
app.get('/emp/:id',(req,res)=>{
    var id=parseInt(req.params.id)
    db.collection('emp').find({"_id":id}).toArray((err,items)=>{
        
        console.log(items)
        res.write(JSON.stringify(items))
        res.end()
    })
})
app.get('/adddata',(req,res)=>{

    console.log(req.body)
    db.collection('emp').insertOne(req.body)
   
    res.end("inserted")
})
