//Bài 2 import as để lấy tất cả đối tượng được export từ file export.js
import * as exportFile from "./modules/upper_lower.js";
import { subtract } from "./modules/subtract_function.js";


console.log(exportFile.UppercaseString("đây là in hoa nè"));
console.log(exportFile.LowercaseString("ĐÂY LÀ IN THƯỜNG"));

//Bài 4 lấy hàm từ subtract_function.js và in ra tại app.js
console.log(subtract(7,4)); 