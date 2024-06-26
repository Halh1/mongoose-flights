const mongoose = require('mongoose');

//shortcut to scheme
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS','DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: Date
})

const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American','Southwest', 'United'],
    },
    airport:{ 
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: { 
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    depart: {
        type: Date,
        timestamp: true,
        default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
    destinations: [destinationSchema]
})



module.exports = mongoose.model('Flight', flightSchema)