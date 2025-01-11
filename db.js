const mongoose = require('mongoose')

let uri = `mongodb+srv://02tanishq:${process.env.password}@cluster0.scppb.mongodb.net`
const connectDB = async () => {
    try{
        await mongoose.connect(uri)
        console.log('Connected to MongoDB successfully')
    }
    catch(err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB