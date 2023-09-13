const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,  // assuming this is a URL or path to the image
        required: true
    }
});

module.exports = mongoose.model('Game', gameSchema);
