const coronacollection=require("../models/userinfo");
const coronaoperations={
    add(record){
var promise=coronacollection.create(record);
return promise;
    }
,update(record){
    console.log(record)
   var pr= coronacollection.updateOne(record)
    // var rec=new coronacollection(record)
    // var pr=rec.save();
    return pr;
},
find(){
    var pr=coronacollection.find();
    return pr;
},
findbyid(id){
    var pr=coronacollection.findById(id);
    return pr;
},
delete(id){
    var pr=coronacollection.findByIdAndDelete(id)
    return pr;
}

}

module.exports=coronaoperations