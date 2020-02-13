import app  from '../src/app'
import request from 'supertest'
import cleanDb from './cleanDB'
import factory from 'factory-girl';

import mongosedb from "../src/database/mongosedb";
import FactoryAuthor from './author'
import FactoryPost from './post'

describe('GET /', () => {
  let response;
  let authors;
  let posts;
  beforeEach(async () => {
    await cleanDb();
    authors = await factory.createMany('author', 5)
    posts = await factory.createMany('post', 5)
  })

  test('verify send many posts has authors', async () =>{
    const query_string = `{
      posts{
      title
        author{
            id
            name
            email      
        }
      }
    }`
    response  = await  request(app)
      .post('/graphql').send({ query:  query_string})
    console.log(response.body);
    //test title blog
    response.body.data.posts.sort(function (a, b) {
      return a.title > b.title;
    });
    posts.sort(function (a, b) {
      return a.title > b.title;
    });
    expect(response.body.data.posts[0].title).toBe(posts[0].title)
    //test author name blog
    expect(response.body.data.posts[0].author.name).toBe(posts[0].author.name)
    console.log(response.body)
  })

  test('verify send one post where title is My first blog post', async () =>{
    const query_string = `{
      post(id: 1){
      title
      author{
            id
            name
            email      
        }
    }
    }`
    response  = await  request(app)
        .post('/graphql').send({ query:  query_string})
    console.log(response.body);
    //test title blog
    expect(response.body.data.post.title).toBe("My first blog post")
    //test author name blog
    expect(response.body.data.post.author.name).toBe("Xavier Decuyper")
  })

  test('get the author with id : 0beb564c and email adam@awesomeblog.com', async () =>{
    const query_string = `{
      author(id: "0beb564c"){
      email
    }
    }`
    response  = await  request(app)
        .post('/graphql').send({ query:  query_string})
    console.log(response.body);
    expect(response.body.data.author.email).toBe("adam@awesomeblog.com")
    //test author name blog
    //expect(response.body.data.post.author.name).toBe("Xavier Decuyper")
  })

});
