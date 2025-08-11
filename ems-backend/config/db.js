const mongoose = require('mongoose');

const connetDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewURlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    }catch(error){
        console.error('MongoDB connection failed:', error.message)
        process.exit(1);
    }
};

module.exports = connetDB;