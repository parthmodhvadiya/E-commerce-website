const {mongoose} = require('mongoose')

const mongoURL = "mongodb+srv://parthmodhvadiya15:9974171197@e-commerce.dktay.mongodb.net/?retryWrites=true&w=majority&appName=E-commerce";

const connectDB = ()=>
{
    return mongoose.connect(mongoURL);
}

module.exports ={connectDB};