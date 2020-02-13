const factoryGirl = require('factory-girl')
const adapter = new factoryGirl.MongooseAdapter()
const factory = factoryGirl.factory
factory.setAdapter(adapter)

const Author = require('../src/database/models/author')

factory.define('author', Author, {
    name: factory.sequence((n) => `firstName${n}`),
    email: factory.sequence((n) => `lastName${n}@email.com`),
})
