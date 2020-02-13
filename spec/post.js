const factoryGirl = require('factory-girl')
const adapter = new factoryGirl.MongooseAdapter()
const factory = factoryGirl.factory
factory.setAdapter(adapter)

const Post = require('../src/database/models/post');

factory.define('post', Post, {
    title: factory.sequence((n) => `title${n}`),
    author: factory.assoc('author', '_id')
})