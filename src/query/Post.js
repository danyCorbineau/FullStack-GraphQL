import {GraphQLList} from "graphql";
import {fakeDatabase} from "../database/FakeDatabase";
import postType from "../types/Post";
import {GraphQLInt} from "graphql/type";
import mongosedb from "../database/mongosedb";

export default {
    posts: {
        type: new GraphQLList(postType),
            resolve:
        async (_, {}) => {
            /*let posts = fakeDatabase.getBlogPosts();
            posts.forEach((post) => {
                post.author = fakeDatabase.getAuthor(post.author)
            });*/
            let posts;
            return posts = await mongosedb.getBlogPosts();
        }
    },
    post: {
        type: postType,
        args: {
            id: {type: GraphQLInt}
        },
        resolve: async (_, {id}) => {
            return fakeDatabase.getBlogPost(id);
        }
    },
}
