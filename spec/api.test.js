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
    console.log(response.body);
    //test title blog
    expect(response.body.data.posts[0].title).toBe("My first blog post")
    //test author name blog
    expect(response.body.data.posts[0].author.name).toBe("Xavier Decuyper")
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
    console.log(response.body)
  })

});
