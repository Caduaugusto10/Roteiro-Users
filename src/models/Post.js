const { v4: uuid4 } = require("uuid");

class Post {
    constructor(comment, like){
        this.id = uuid4();
        this.comment = comment;
        this.like = like;
    }
}

module.exports = Post;