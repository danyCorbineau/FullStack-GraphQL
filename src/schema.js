import {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList} from "graphql";
import {fakeDatabase} from './FakeDatabase';

// Define the User type
const postType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        id: {type: GraphQLString},
        title: {type: GraphQLString},
    }
});

// Define the Query type
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        posts: {
            type: new GraphQLList(postType),
            // args: {
            //     id: { type: GraphQLString }
            // },
            resolve: (_, {}) => {
                return fakeDatabase.getBlogPosts();
            }
        }
    }
});

const schema = new GraphQLSchema({query: queryType});


export default schema;
