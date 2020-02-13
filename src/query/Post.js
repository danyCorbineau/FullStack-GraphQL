import {GraphQLList} from "graphql";
import {fakeDatabase} from "../database/FakeDatabase";
import postType from "../types/Post";
import {GraphQLInt} from "graphql/type";
import mongosedb from "../database/mongosedb";

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
            return posts = mongosedb.getBlogPosts();
        }
    },
    post: {
        type: postType,
        args: {
            id: {type: GraphQLInt}
        },
        resolve: (_, {id}) => {
            return fakeDatabase.getBlogPost(id);
        }
    },
}
