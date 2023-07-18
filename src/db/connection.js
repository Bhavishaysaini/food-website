const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://hijack:hijack1@hijck1.l4rfmek.mongodb.net/food-factory",{
  
}).then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})


