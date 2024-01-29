//Bài 1
//this Trong JavaScript, "this" thường được sử dụng để tham chiếu đến đối tượng hiện tại trong ngữ cảnh thực thi.
let student = {
    name: "Khải Hoàng",
    sayHello: function () {
        console.log("Hello, " + this.name);
    }
};

student.sayHello();

//Bài 2
//Chuyển đổi
// Shape.prototype.move = function(x,y){
//     this.x = x;
//     this.y = y;
// };

class Shape {
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}
const myShape = new Shape();
myShape.move(5, 10);
console.log(myShape.x, myShape.y);

//Bài 3
class Clock {
    constructor({ template }) {
        this.template = template;
        this.timer;
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);

    }
}
let clock = new Clock({ template: 'h:m:s' });
clock.start();
setTimeout(() => {
    clock.stop(); // Dừng đồng hồ sau một khoảng thời gian
}, 5000); // Dừng sau 5 giây

//Bài 4
var person = {
    firstname: "Nguyễn",
    lastname: "Khải Hoàng",
    set lastname(value) {
        this._lastname = value;
    },
    get lastname() {
        return this._lastname;
    },
    set firstname(value) {
        this._firstname = value;
    },
    get firstname() {
        return this._firstname;
    },
    getFullName: function () {
        return `${this._firstname} ${this._lastname}`;
    }
};
person.lastname ="Hoàng";
person.firstname = "Khải";
console.log(person.getFullName());

//Bài 5
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
  
  class Comment {
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
  
  class Post {
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
  
// Kiểm tra in ra console log
  
  const apiCaller = new APICaller('http://localhost:3000');
  
  const commentAPI = new Comment(apiCaller);
  commentAPI.getAll().then((comments) => console.log('All comments:', comments));
  
  const postAPI = new Post(apiCaller);
  postAPI.getOne(1).then((post) => console.log('Post with ID 1:', post));
  