import {GraphQLObjectType, GraphQLString} from "graphql";
import {GraphQLInt} from "graphql/type";
import {fakeDatabase} from "../FakeDatabase";
import authorType from "./Author";

const postType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        id: {type: GraphQLInt},
        title: {type: GraphQLString},
        author: {type: authorType, resolve:(parent) => {return fakeDatabase.getAuthor(parent.author)}},
    }
});

export default postType;