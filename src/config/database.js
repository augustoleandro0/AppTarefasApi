const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb+srv://deploy:admin@cluster0.mlvgbao.mongodb.net/appTarefas?retryWrites=true&w=majority')