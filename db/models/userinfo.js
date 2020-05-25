const connection=require("../../utils/connection")
var schema=connection.Schema;
var coronaschema=new schema({
user_name:{required:true,type:String,minlength:3},
user_age:{required:true,type:Number},
user_gender:{required:true,type:String,minlength:4,trim:true},
user_fever:{required:true,type:Number},
user_bodypain:{required:true,type:Number},
user_runningnose:{required:true,type:Number},
user_breath:{required:true,type:Number},
user_nasal:{required:true,type:Number},
user_throat:{required:true,type:Number},
user_severity:{required:true,type:String,minlength:4,trim:true},
user_contactwithperson:{required:true,type:String,trim:true},
infected:{required:true,type:Number},
remarks:{type:String,minlength:4,}
})

const coronacollection=connection.model("corona",coronaschema)
module.exports=coronacollection