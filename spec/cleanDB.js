import Post from '../src/database/models/post'
import Author from '../src/database/models/author';

const cleanDb = async () => {
    await Author.deleteMany({});
    await Post.deleteMany({});
}
export default cleanDb;