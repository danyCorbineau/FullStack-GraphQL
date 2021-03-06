import {GraphQLInt} from "graphql/type";
import {fakeDatabase} from "../database/FakeDatabase";
import {GraphQLString} from "graphql";
import authorType from "../types/Author";

export default {
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
