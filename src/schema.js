import {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList} from "graphql";
import {fakeDatabase} from './FakeDatabase';
import {GraphQLInt} from "graphql/type";

// Define the Author type
const authorType = new GraphQLObjectType({
    name: 'Author',
    fields: {
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
    }
});

// Define the Post type
const postType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        id: {type: GraphQLInt},
        title: {type: GraphQLString},
        author: {type: authorType, resolve:(parent) => {return fakeDatabase.getAuthor(parent.author)}},
    }
});

// Define the Query type
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        posts: {
            type: new GraphQLList(postType),
            resolve: (_, {}) => {
                /*let posts = fakeDatabase.getBlogPosts();
                posts.forEach((post) => {
                    post.author = fakeDatabase.getAuthor(post.author)
                });*/
                let posts;
                return posts = fakeDatabase.getBlogPosts();;
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
