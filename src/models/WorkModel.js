const  mongoose = require('mongoose');
const DataSchema=mongoose.Schema({
    title:{type:String},
    classNote:{type:String},
    description:{type:String},
    status:{type:String},
    email:{type:String}
},{timestamps: true,versionKey:false});
const WorkModel=mongoose.model('works',DataSchema);
module.exports=WorkModel