const usersWebModel = require("../models/usersWebModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    
    create: async function (req, res, next) {
        try{
            console.log(req.body);
            const userWeb = new usersWebModel({
                name: req.body.name,
                email:req.body.email,
                password:req.body.password
            })
            const document = await userWeb.save();
            res.json(document);
        }catch(e){
            next(e)
        }
        
    }
}