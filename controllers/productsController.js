
module.exports = {
    getAll:(req, res, next)=>{
      console.log(req.query)
      const productos = [
          {
              id:1,
              name:"Moto g",
              price:1000
          },
          {
              id:2,
              name:"Moto x",
              price:1500
          }
      ]
      res.json(productos);
    },
    getById:function(req, res, next) {
        console.log(req.params.id);
        const producto = {
            id:1,
            name:"Moto g",
            price:1000
        }
        res.json(producto);
    },
    create:function(req, res, next) {
        console.log(req.body);
        
        res.json(req.body);
    },
    update:function(req, res, next) {
        console.log(req.params.id,req.body);
        
        res.json(req.body);
    },
    delete:function(req, res, next) {
        console.log(req.params.id);
        
        res.json({});
    }
}