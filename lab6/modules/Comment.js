export class Comment {
    constructor(apiCaller) {
      this.apiCaller = apiCaller;
    }
  
    async getAll() {
      try {
        const comments = await this.apiCaller.get('comments');
        return comments;
      } catch (error) {
        throw error;
      }
    }
  
    async getOne(commentId) {
      try {
        const comment = await this.apiCaller.get(`comments/${commentId}`);
        return comment;
      } catch (error) {
        throw error;
      }
    }
  }