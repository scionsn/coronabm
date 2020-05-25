const corona=require("../db/models/userinfo")
const express=require("express");
const croute=express.Router();
const crud=require("../db/helpers/infocrud")

croute.get("/coronainfo",(req,res)=>{
    res.set({'content-type':'application/json'});
crud.find().
then(data=>{
    res.json(data)
}).
catch(err=>{
    res.json({error:err})
})
}
)
// croute.post("/update",(req,res)=>{
//     res.set({'content-type':'application/json'});

//     const obj={
//         user:req.body.user,
//         description:req.body.description,
//         date:req.body.date,
//         duration:Number(req.body.duration)
//     }
//     crud.update(obj).then(data=>{
//         res.json(data)
//         console.log("record updted")
//     }).catch(err=>{
//         console.log("err in uodate")
//     })
// }  
// )
// croute.delete("/delete/:id",(req,res)=>{
//     var id=req.params.id;
// crud.delete(id).then(()=>{
//     console.log("deletd")
// }).catch(err=>{
//     console.log(err)
// })
// })
// croute.post("/addexercise",(req,res)=>{
//     res.set({'content-type':'application/json'});
// const duration=Number(req.body.duration);
// console.log(typeof duration)
// const newobj={
//     user:req.body.user,
//     description:req.body.description,
//     date:req.body.date,
//     duration:duration
// }
// crud.add(newobj).
// then(data=>{
//     res.json(data)
//     console.log("response added")
// }).catch(err=>{
//     res.json(err)
//     console.log("err in exer ",err)
// })
// })

module.exports=croute;