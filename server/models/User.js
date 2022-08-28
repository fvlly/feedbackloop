const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    googleId: String,
    credits: {
        type:Number,
        default:10
    }
})

mongoose.model('User',userSchema)