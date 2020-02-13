import {GraphQLInt} from "graphql/type";
import {fakeDatabase} from "../FakeDatabase";
import {GraphQLString} from "graphql";
import postType from "../types/Post";
import authorType from "../types/Author";

export default {
    post: {
        type: postType,
        args: {
            id: {type: GraphQLInt}
        },
        resolve: (_, {id}) => {
            return fakeDatabase.getBlogPost(id);
        }
    },
    author: {
        type: authorType,
        args: {
            id: {type: GraphQLString}
        },
        resolve: (_, {id}) => {
            return fakeDatabase.getAuthor(id);
        }
    }
}