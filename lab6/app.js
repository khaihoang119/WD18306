//Bài 2 import as để lấy tất cả đối tượng được export từ file export.js
import * as exportFile from "./modules/upper_lower.js";
import { subtract } from "./modules/subtract_function.js";
import * as Caller from "./modules/APICaller.js"
import * as comment from "./modules/Comment.js";
import * as posts from "./modules/Post.js";


console.log(exportFile.UppercaseString("đây là in hoa nè"));
console.log(exportFile.LowercaseString("ĐÂY LÀ IN THƯỜNG"));

//Bài 4 lấy hàm từ subtract_function.js và in ra tại app.js
console.log(subtract(7,4)); 



//
// Kiểm tra in ra console log
  
const apiCaller = new Caller.APICaller('http://localhost:3000');
  
const commentAPI = new comment.Comment(apiCaller);
commentAPI.getAll().then((comments) => console.log('All comments:', comments));

const postAPI = new posts.Post(apiCaller);
postAPI.getOne(1).then((post) => console.log('Post with ID 1:', post));