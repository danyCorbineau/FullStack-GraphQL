import mongoose from "mongoose";
const Schema = mongoose.Schema;

let schema = new mongoose.Schema({
    name: String,
    email: String,
    posts: {
        type: Schema.Types.ObjectID, ref: 'Post'
    }
});

export default mongoose.model('Author', schema, 'author');
