var express=require("express");
var cors=require("cors");
var croute=require("./routes/inforoutes");
var app=express();
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors());
app.use("/corona",croute)



var port=process.env.PORT||4000;
app.listen(port,()=>{
    console.log("server started on",port);
})
