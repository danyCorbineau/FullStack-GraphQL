import app  from '../src/app'
import request from 'supertest'

describe('GET /', () => {
  let response
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
    //test title blog
    expect(response.body.data.posts[0].title).toBe("My first blog post")
    //test author name blog
    expect(response.body.data.posts[0].author.name).toBe("Xavier Decuyper")
    console.log(response.body.data)
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
    console.log(response.body.data);
    //test title blog
    expect(response.body.data.post.title).toBe("My first blog post")
    //test author name blog
    expect(response.body.data.post.author.name).toBe("Xavier Decuyper")
  })

  test('get the author with id : 0beb564c and email adam@awesomeblog.com', async () =>{
    const query_string = `{
      author(id: "0beb564c"){
        id
        name
        email
        posts {
            id
            title
        }
      }
    }`;
    response  = await  request(app)
        .post('/graphql').send({ query:  query_string})
    console.log(response.body.data);
    expect(response.body.data.author.email).toBe("adam@awesomeblog.com")
    expect(response.body.data.author.posts[0].title).toBe("Second blog post")
  })

});
