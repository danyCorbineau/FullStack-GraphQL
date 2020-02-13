import {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList} from "graphql";
import {fakeDatabase} from './FakeDatabase';
import {GraphQLInt} from "graphql/type";

// Define the User type
const postType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        id: {type: GraphQLInt},
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
        },
        post: {
            type: postType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve: (_, {id}) => {
                return fakeDatabase.getBlogPost(id);
            }
        }
    }
});

const schema = new GraphQLSchema({query: queryType});


export default schema;
