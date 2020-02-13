import {GraphQLObjectType, GraphQLString} from "graphql";

const authorType = new GraphQLObjectType({
    name: 'Author',
    fields: {
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
    }
});

export default authorType;