import mongoose from "mongoose";
const Schema = mongoose.Schema;

let schema = new mongoose.Schema({
   title: String,
   author: {
       type: Schema.Types.ObjectID, ref: 'Author'
   }
});
const model = mongoose.model('Post', schema, 'post')
module.exports = model;
