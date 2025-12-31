const mongoose = require('mongoose');
//define person scheme

const personScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number 
    },
    work:{
        type:String,
        enum:['Chef','Waiter','Manager'],  // inme se koi bhi hoga tabhi data lega
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
}
);

const Person = mongoose.model('Person',personScheme);
module.exports = Person;
