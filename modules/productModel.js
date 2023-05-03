
const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter name"]
        },
        quantity: {
            type: Number,
            required: true,
            defalt: 0
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const product = mongoose.model('Product', productSchema);
module.exports = product;