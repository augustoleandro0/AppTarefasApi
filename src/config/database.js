const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb+srv://deploy:admin@cluster0.mlvgbao.mongodb.net/?retryWrites=true&w=majority')