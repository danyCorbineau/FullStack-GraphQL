import {GraphQLList} from "graphql";
import {fakeDatabase} from "../FakeDatabase";
import postType from "../types/Post";

export default {
    posts: {
        type: new GraphQLList(postType),
            resolve:
        (_, {}) => {
            /*let posts = fakeDatabase.getBlogPosts();
            posts.forEach((post) => {
                post.author = fakeDatabase.getAuthor(post.author)
            });*/
            let posts;
            return posts = fakeDatabase.getBlogPosts();
            ;
        }
    }
}