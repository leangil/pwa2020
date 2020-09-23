const mongoose = require("../bin/mongodb");
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    user:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
userSchema.pre("save",function(next){
    this.password = bcrypt.hashSync(this.password,10);
    next();
})
module.exports = mongoose.model("usersAdmin",userSchema);