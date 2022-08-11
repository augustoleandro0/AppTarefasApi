const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const mongoUrl = 'mongodb+srv://deploy:admin@cluster0.mlvgbao.mongodb.net/appTarefas?retryWrites=true&w=majority'

module.exports = mongoose.connect(mongoUrl)