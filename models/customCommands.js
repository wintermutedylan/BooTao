const mongoose = require('mongoose');

const customCommand = new mongoose.Schema({
    guildID: { type: String, require: true},
    commandName: { type: String, require: true},
    responseContent: { type: String, require: true}
})

const model = mongoose.model('customCommands', customCommand);

module.exports = model;