import mongoose from "mongoose";
import post from "./models/post";
import author from "./models/author";

class Mongosedb {
    constructor() {
        mongoose.connect('mongodb://localhost:27017/graphql', {useNewUrlParser: true});

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function() {
            // we're connected!
        });
    }

    getBlogPosts() {
        // Here you would make a db connection + query + return data
        return post.find()
            .select('_id title').exec();
    }

    /*getBlogPost(id) {
        return post.filter((post) => {
            return post.id === id;
        })[0];
    }

    getAuthor(authorId) {
        return this.authors.filter((author) => {
            return author.id === authorId;
        })[0];
    }*/
}

export default new Mongosedb();


