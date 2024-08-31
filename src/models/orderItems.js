const mongoose=require("mongoose");
const { Schema }= mongoose;

const orderItemSchema= new Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required:true,
    },
    size:{
        type:String,
    },
    quantity:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    discountedPrice:{
        type:String,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required:true,
    },

    
});

const OrderItem= mongoose.model('orderItems',orderItemSchema);
module.exports= OrderItem;