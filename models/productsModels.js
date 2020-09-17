const mongoose = require("../bin/mongodb");

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        minlength: 1,
        maxlength: 255,
        trim: true,
        required: true
    },
    sku: {
        type: String,
        unique: true,
        minlength: 1,
        maxlength: 255,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ["pendiente", "en_stock", "activo"]
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "categories"
    },
    price: {
        type: Number,
        min: 1,
        required: true,
        get: function (price_get) {
            return price_get * 1.21;
        }
    },
    quantity: Number
});
productsSchema.virtual("price_currency").get(function () {
    return "$ " + this.price;
})
productsSchema.set('toJSON', { getters: true, virtuals: true });
module.exports = mongoose.model("products", productsSchema)