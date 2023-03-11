const mongoose = require('mongoose');

const connection = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Mongo connected successfuly: ${con.connection.host}`)
    } catch (err) {
        console.log('Database connection error: ', err.message)
    }
}

module.exports = connection