const mongoose = require('mongoose');

const clientHistory = mongoose.Schema({
    gallons: {
        type: String,
        required: true,
    },
    orderdate: {
        type: String,
        required: true
    },
    deladdress: {
        type: String,
        required: true
    },
    deldate: {
        type: String,
        required: true,

    },
    suggestedprice: {
        type:String,
        required: true

    },
    totalammount : {
        type:String, 
        required : true,
    }
});
module.exports = mongoose.model("History", clientHistory);