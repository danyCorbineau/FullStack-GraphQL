import {GraphQLObjectType, GraphQLString} from "graphql";
import {GraphQLList} from "graphql/type";
import postType from "./Post";
import {fakeDatabase} from "../FakeDatabase";

const authorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        posts: {type: new GraphQLList(postType), resolve:(parent) => {return fakeDatabase.getPostsOfAuthor(parent.id)}}
    })
});

export default authorType;
