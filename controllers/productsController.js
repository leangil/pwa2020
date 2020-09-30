const productsModel = require("../models/productsModels");
const categoryModel = require("../models/categoriesModel")
module.exports = {
    getAll: async (req, res, next) => {
        try{
            console.log(req.body.tokenData)
            const productos = await productsModel.find({}).populate("category").sort({name:1});
            res.status(200).json(productos);
        }catch(e){
            next(e)
        }
        
    },
    getById: async function (req, res, next) {
        try{
            console.log(req.params.id);
            const producto = await productsModel.findById(req.params.id).select("name price");
            if(!producto){
                res.status(200).json({msg:"no existe el producto"})
                return; //Siempre despues de un res un return
            }
            res.status(200).json(producto);
        }catch(e){
            next(e)
        }
        
    },
    create: async function (req, res, next) {
        console.log(req.body);
        try{
            const categoria = await categoryModel.findBydIdAndValidate(req.body.category);
            if(categoria.error){
                res.json(categoria);
                return;
            }
            const product = new productsModel({
                name: req.body.name,
                sku: req.body.sku,
                description: req.body.description,
                price: req.body.price,
                quantity: req.body.quantity,
                category: categoria._id,
                tags:req.body.tags
            })
            console.log(req.body.tags)
            const document = await  product.save();
           
            res.status(201).json(document);
        }catch(e){
            console.log(e)
            //e.status=204;
            next(e);
        }
        
    },
    update: async function (req, res, next) {
        try{
            console.log(req.params.id, req.body);
            const producto = await productsModel.update({ _id: req.params.id }, req.body, { multi: false })
            res.status(200).json(producto);
        }catch(e){
            next(e)
        }
        
    },
    delete: async function (req, res, next) {
        try{
            console.log(req.params.id);
            const data = await productsModel.deleteOne({ _id: req.params.id });
            res.status(200).json(data);
        }catch(e){
            next(e)
        }
        
    }
}