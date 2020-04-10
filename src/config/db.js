const mongoose = require('mongoose')

const database = mongoose.connect(process.env.MONGO_URI_PROD,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }, (err) => {
        if (!err) {
            console.log('Database successfully connected')
        }
    })

module.exports = database
