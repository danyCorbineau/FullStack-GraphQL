import {GraphQLObjectType, GraphQLSchema}  from "graphql";
import Post from './query/Post'
import Author from './query/Author'

// Define the Query type
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        ...Post,
        ...Author
    }
});

const schema = new GraphQLSchema({query: queryType});


export default schema;
