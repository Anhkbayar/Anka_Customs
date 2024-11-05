const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/Database"

const connect = () => {
    mongoose.connect(url)
}

module.exports = connect