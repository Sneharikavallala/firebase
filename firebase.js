var express=require('express')
var firebase=require('firebase')
var app=express()
app.use(express.json())
app.listen(2000,()=>{
    console.log("server started")
})
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjOn3_i7YTKOTdVZuInsKtXruDuSOb0Us",
    authDomain: "firstfirebase-17faa.firebaseapp.com",
    databaseURL: "https://firstfirebase-17faa-default-rtdb.firebaseio.com",
    projectId: "firstfirebase-17faa",
    storageBucket: "firstfirebase-17faa.appspot.com",
    messagingSenderId: "592005946307",
    appId: "1:592005946307:web:971e2d87eca2d57c49bb76",
    measurementId: "G-FPHGW169VN"
  };
  firebase.initializeApp(firebaseConfig)
  dbref=firebase.database().ref("student")
  app.get("/students",(req,res)=>{
      dbref.on('value',(snap)=>{
          res.send(snap.val())
      })
  })
  app.post("/addStudents",(req,res)=>{
      stu={
          "id":10000,
          "name":"xyz"
      }
      dbref.child(stu.id).set(stu,(data)=>{
          res.send("inserted")
      })
  })
  app.delete("/delete/:id",(req,res)=>{
      var id=req.params.id
      dbref.child(id).remove()
      res.send("deleted")
  })
  app.put("/update/:id",(req,res)=>{
      var id=req.params.id
      console.log(req.body)
      dbref.child(id).update({
            "name":"ruthwik"
      })
      res.send("updated.....")
  })
  app.post("/addStudent",(req,res)=>{
      dbref.child(req.body.id).set(req.body,(data)=>{
          res.send("inserted")
      })
  })
