const  coronaop=require("../db/helpers/infocrud")
async function insert(){
    try{
var rec=await coronaop.add({
    user_name:"sheela",
    user_age:25,
    user_gender:"female",
    user_fever:33,
    user_bodypain:0,
    user_runningnose:1,
    user_breath:0,
    user_nasal:1,
    user_throat:1,
    user_severity:"moderate",
    user_contactwithperson:"yes",
    infected:1,
    remarks:"acute headache and vomiting"
})
//  var rec2=coronaop.find()
// var rec2=await userop.add({user:"kaashi "})
// var rec3=await exerciseop.add({user:"bihari",description:"football",date:"2nd august",duration:11})
// var rec4=await exerciseop.update({user:"tim",description:"simple exer",date:"3rd august",duration:14})
// var rec5=await exerciseop.findbyid({_id:"5ec1fa703683b1278c6bb08b"})
// var rec5=await userop.delete({_id:"5ebb8b619090ca1c244b28d4"})

console.log("records added in db ",rec);
    }
    catch(e){
        console.log("error in insert--",e)
    }
}
insert();
