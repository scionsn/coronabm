const corona=require("../db/models/userinfo")
const express=require("express");
const axios=require("axios");
const croute=express.Router();
const crud=require("../db/helpers/infocrud")

var info;
croute.get("/coronainfo",(req,res)=>{

    res.set({'content-type':'application/json'});
crud.find().
then(data=>{
    console.log("all data from the db")
    console.log(data)
    res.status(200).json(data)
    // res.json(data)
    // console.log("find called",time)
}).
catch(err=>{
    res.json({error:err})
})
}
)
croute.get("/location/:id",(req,res)=>{
    console.log(req.params.id);
    res.status(200).send(req.params.id)
})

// croute.get("/mlinfo",(req,res)=>{
//     var info;
//     // res.set({'content-type':'application/json'});
// axios.get("http://localhost:4000/corona/coronainfo").then(doc=>{
//     // console.log(doc.data)
//      info=doc.data[0]
//     console.log("data from db",info)
//     console.log(typeof doc)
    
// })
// .catch(err=>{
//         console.log(err)
//     })
//     axios.get("https://5be926c0.ngrok.io/").then(doc=>{
//     // console.log(doc.data)
//     // console.log(typeof doc)
//     var i=doc.data;
//     var res=JSON.parse(i);
//     console.log("ml data",res[0])
// }).catch(err=>{
//     console.log("err is",err)
// })

// })

// croute.delete("/delete/:id",(req,res)=>{
//     var id=req.params.id;
// crud.delete(id).then(()=>{
//     console.log("deletd")
// }).catch(err=>{
//     console.log(err)
// })
// })
croute.post("/addinfo",(req,res)=>{
    res.set({'content-type':'application/json'});
    const user_age=Number(req.body.user_age)
    const user_fever=Number(req.body.user_fever)
    const user_bodypain=Number(req.body.user_bodypain)
    const user_runningnose=Number(req.body.user_runningnose)
    const user_breath=Number(req.body.user_breath)
    const user_nasal=Number(req.body.user_nasal)
    const user_throat=Number(req.body.user_throat)
    const infected=Number(req.body.infected)

// const duration=Number(req.body.duration);
// console.log(typeof duration)
const newobj={
    user_name:req.body.user_name,
    user_age:user_age,
    user_gender:req.body.user_gender,
    user_fever:user_fever,
    user_bodypain:user_bodypain,
    user_runningnose:user_runningnose,
    user_breath:user_breath,
    user_nasal:user_nasal,
    user_throat:user_throat,
    user_severity:req.body.user_severity,
    user_contactwithperson:req.body.user_contactwithperson,
    infected:infected,
    remarks:req.body.remarks
}
console.log("user info ",req.body)
crud.add(newobj).
then(info=>{
    console.log("full db obj ",info)
    croute.post("https://forminfo.herokuapp.com/",{
info:info
    })
    // res.json(data)
    // console.log("response added",data)
    // croute.get("/addedresp",(req,res)=>{
    // res.set({'content-type':'application/json'});
    //     res.status(200).json(data)
    //     console.log(data.user_name)
    // })
}).catch(err=>{
    res.json(err)
    console.log("err in add ",err)
})
})

croute.get("/forminfo",(req,res)=>{
    res.set({"content-type":"application/json"})
    console.log("form info called")


    res.status(200).json(info)
})
croute.put("/update",(req,res)=>{
    res.set({'content-type':'application/json'});
    const user_age=Number(req.body.user_age)
    const user_fever=Number(req.body.user_fever)
    const user_bodypain=Number(req.body.user_bodypain)
    const user_runningnose=Number(req.body.user_runningnose)
    const user_breath=Number(req.body.user_breath)
    const user_nasal=Number(req.body.user_nasal)
    const user_throat=Number(req.body.user_throat)
    const infected=Number(req.body.infected)
    const obj={
        user_name:req.body.user_name,
        user_age:user_age,
        user_gender:req.body.user_gender,
        user_fever:user_fever,
        user_bodypain:user_bodypain,
        user_runningnose:user_runningnose,
        user_breath:user_breath,
        user_nasal:user_nasal,
        user_throat:user_throat,
        user_severity:req.body.user_severity,
        user_contactwithperson:req.body.user_contactwithperson,
        infected:infected,
        remarks:req.body.remarks
    }
    crud.update(obj).then(data=>{
        res.json(data)
        console.log("record updted")
    }).catch(err=>{
        console.log("err in update")
    })
}  
)
croute.get("/mlinfo",(req,res)=>{
    res.set({"content-type":"application/json"})
    axios.get("https://afternoon-caverns-18635.herokuapp.com/").then(doc=>{
        console.log(doc.data)
        console.log(typeof doc)
        res.status(200).json(doc.data)
    }).catch(err=>{
        console.log("err in fetch ml info",err)
    })
})


module.exports=croute;