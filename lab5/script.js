const { default: axios } = require("axios");
const API_URL = 'http://localhost:3000/';
axios.get(API_URL + "comments").then((data) => console.log(data.data));
axios.get(API_URL + "comments").then(({ data }) => console.log(data));

// let comment = {
//     "content": "Nice!!!",
//     "postId": 1
// }

class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async get(endpoint) {
        try {
            return axios.get(`${this.baseUrl}${endpoint}`);
        } catch (error) {
            console.log('Error data', error);
        }
    }
}

class Comment extends APICaller {
    constructor(baseUrl, commentId) {
        super(baseUrl);
        // this.comment = comment;
        this.commentId = commentId;
    }
    async getAll() {
        try {
            return  this.API_URL.get('comments')
        } catch (error) {
            console.log('Error data', error);
        }
    }
    async getOne(commentId) {
        return await this.API_URL.get(`comments/${commentId}`);
    } catch(error) {
        console.log('Error data', error);
    }
}
class Post extends APICaller {
    constructor(baseUrl, postId) {
        super(baseUrl);
        // this.posts = posts;
        this.postId = postId;
        this.endpoint = 'post';
    }
    async getAll() {
        try {
            return this.API_URL.get('post')
        } catch (error) {
            console.log("Error data", error);
        }
    }
    async getOne(postId) {
        try {
            return await this.API_URL.get(`posts/${postId}`);
        }catch (error) {
            console.log("Error data", error);
        }
    }
}

// comment = new Comment("comments","nice",1);
// console.log(comment)
const commentService = new Comment(API_URL);
// const postService = new Post(API_URL);

commentService.getAll().then(comments =>console.log('Comments',comments));