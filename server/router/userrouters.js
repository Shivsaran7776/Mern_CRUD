const express = require('express')
const Schema = require('../schema/userSchema')
const router = express.Router();

router.post('/addUser',async(req,res)=>{
    console.log('From the addUser API : ', req.body);

    const user = await new Schema(req.body);
    const result = await user.save();

    if(result){
        res.json({
            message:"Success in Insertion of Data"
        })
    }
    else{
        res.json({
            message:"Failed in Insertion of Data"
        })
    }
}),

router.get('/getAllUser',async(req,res)=>{
    console.log('From the getAllUser API : ', req.body);

    const user = await Schema.find();

    if(user){
        res.json({
            user
        })
    }
    else{
        res.json({
            message:"Failed to Fetch all users Data"
        })
    }
}),

router.get('/getUser',async(req,res)=>{
    console.log('From the getUser API : ', req.body);
    
    const user = await Schema.findOne(req.body);

    if(user){
        res.json({
            user
        })
    }
    else{
        res.json({
            message:"Failed to Fetch required User Data"
        })
    }
}),

router.patch('/update',async(req, res)=>{
    console.log('From the Update API : ', req.body);

    const mail = req.body.email;
    const pass = req.body.password;

    const result = await Schema.updateOne(
        {
            email: mail
        },
        {
            $set:{
                password: pass
            }
        }
    )
    if(result){
        res.json({
            message:"Successfull in Updation of Data"
        })
    }
    else{
        res.json({
            message:"Failed in Updation of Data"
        })
    }
}),

router.delete('/deleteAll', async(req, res)=>{
    console.log('From the deleteAll API : ', req.body);

    const result = await Schema.deleteMany();

    if(result){
        res.json({
            message:"Successfull in Deletion of All Data"
        })
    }
    else{
        res.json({
            message:"Failed in Deletion of All Data"
        })
    }
}),

router.post('/deleteUser',async(req,res)=>{
    console.log('From the deleteUser API : ', req.body);

    const mail = req.body.email;
    console.log(mail);
    const result = await Schema.deleteOne({
        email:mail
    })

    if(result){
        res.json({
            message:"Successfull in Deletion of Data"
        })
    }
    else{
        res.json({
            message:"Failed in Deletion of Data"
        })
    }
})

module.exports = router