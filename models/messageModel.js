const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    conversation: { type: mongoose.Types.ObjectId, ref: 'conversation' },
    sender: { type: mongoose.Types.ObjectId, ref: 'user' },
    recipient: { type: mongoose.Types.ObjectId, ref: 'user' },
    text: String,
    media: Array,
    call: Object
}, {
    timestamps: true
})

module.exports = mongoose.model('message', messageSchema)