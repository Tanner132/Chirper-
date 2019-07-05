const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    Name:{
        type:String,
        require: true
    },
    Last_Name: {
        type: String,
        require:true
    },
    Email:{
        type:String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

module.exports = Users = mongoose.model('users', UsersSchema);