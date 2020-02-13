import {GraphQLObjectType, GraphQLString} from "graphql";
import {GraphQLInt} from "graphql/type";
import {fakeDatabase} from "../database/FakeDatabase";
import authorType from "./Author";
import mongosedb from "../database/mongosedb";

const postType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        id: {type: GraphQLInt},
        title: {type: GraphQLString},
        author: {type: authorType, resolve:(parent) => {return mongosedb.getAuthor(parent.author)}},
    }
});

export default postType;
