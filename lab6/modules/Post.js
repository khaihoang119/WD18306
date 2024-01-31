export class Post {
    constructor(apiCaller) {
      this.apiCaller = apiCaller;
    }
  
    async getAll() {
      try {
        const posts = await this.apiCaller.get('posts');
        return posts;
      } catch (error) {
        throw error;
      }
    }
  
    async getOne(postId) {
      try {
        const post = await this.apiCaller.get(`posts/${postId}`);
        return post;
      } catch (error) {
        throw error;
      }
    }
  }