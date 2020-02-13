import mongoose from "mongoose";
const Schema = mongoose.Schema;

let schema = new mongoose.Schema({
   title: String,
   author: {
       type: Schema.Types.ObjectID, ref: 'Author'
   }
});

export default mongoose.model('Post', schema, 'post');
