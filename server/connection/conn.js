const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ashwinkaranthamalai:Ashwin17@cluster0.qm1hj66.mongodb.net/Docker_Deploy').then(()=>{
        console.log("Successfully Connected to MongoDB")
    }).catch((err)=>{
        console.log(err);
})