import app  from '../src/app'
import request from 'supertest'

describe('GET /', () => {
  let response
  test('verify send many posts has authors', async () =>{
    const query_string = `{
      posts{
      title
    }
    }`
    response  = await  request(app)
      .post('/graphql').send({ query:  query_string})
    console.log(response.body);
    expect(response.body.data.posts[0].title).toBe("My first blog post")
    console.log(response.body)
    })

  test('verify send one post where title is My first blog post', async () =>{
    const query_string = `{
      post(id: 1){
      title
    }
    }`
    response  = await  request(app)
        .post('/graphql').send({ query:  query_string})
    console.log(response.body);
    expect(response.body.data.post.title).toBe("My first blog post")
    console.log(response.body)
  })

});
