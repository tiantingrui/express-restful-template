const mongoose = require('mongoose')

const TemplateSchema = mongoose.Schema({
    id: String,
    name: String,
    template: String,
    data: String,
}, {collection: 'template'})

module.exports = mongoose.model('template', TemplateSchema)