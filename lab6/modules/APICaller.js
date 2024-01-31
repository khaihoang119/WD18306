import * as comment from "./Comment.js";
import * as posts from "./Post.js";

class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}
export const apiCaller = new APICaller('http://localhost:3000');
export const commentAPI = new comment.Comment(apiCaller);
export const postAPI = new posts.Post(apiCaller);