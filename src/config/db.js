const  mongoose  = require("mongoose")

const mondbUrl="mongodb+srv://kavyabhatt820:z0SQETsLqgC4XN8q@cluster0.rggxe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb};