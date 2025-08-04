import mongoose from "mongoose";

const sampledata = new mongoose.Schema({
  name : {type : String},
    age : { type : Number},
    place : {type : String},
})

const Schema = mongoose.model('Sample',sampledata)

export default Schema;