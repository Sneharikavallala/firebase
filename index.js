var http=require('http')
var fs=require('fs')
    var server=http.createServer(function(req,res){
        if(req.url=='/')
        {
            fs.readFile("demo.txt",function(err,data){
                res.write(data)
                res.end()
            })
        }
        else if(req.url=='/home')
        {
            fs.readFile("home.txt",function(err,data)
            {
            res.write("This is home page")
            res.end()
            })
        }
        else if(req.url=='/admin')
        {
            fs.readFile("admin.txt",function(err,data)
            {
                res.write(data)
                res.end()
            })
        }
        else if(req.url=='/login')
        {
            fs.readFile("login1.html",function(err,data)
            {
                res.write(data)
                res.end()
            })
        }
    })
    server.listen(2000)
    console.log("Server started on port 2000")