const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/CRUD_Try1').then(()=>{
        console.log("Successfully Connected to MongoDB")
    }).catch((err)=>{
        console.log(err);
})