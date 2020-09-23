const usersAdminModel = require("../models/usersAdminModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    validate: async (req, res, next) => {
        console.log(req.query)
        const userAdmin = await usersAdminModel.findOne({user:req.body.user});
        if(userAdmin){
            if(bcrypt.compareSync(req.body.password,userAdmin.password)){
                //User y password ok, generar token
                const token = jwt.sign({userId:userAdmin._id},"123");
                res.json({message:"usuario ok",token:token});
            }else{
                res.json({message:"password incorrecto"});
            }
        }else{
            res.json({message:"usuario incorrecto"});
        }
    },
    create: function (req, res, next) {
        console.log(req.body);
        const userAdmin = new usersAdminModel({
            name: req.body.name,
            user:req.body.user,
            password:req.body.password
        })
        userAdmin.save();
        res.json(userAdmin);
    }
}