//Bài 1
let promise = new Promise(function(resolve,reject){
    resolve(1);
    setTimeout(() => resolve(2),1000);
});
// promise.then(alert);
//Kết quả trả về 1

//Bài 2
const axios = require('axios');

async function fetchUrls(urls){
    const result = [];
    for(const url of urls){
        const res = await axios.get(url);
        result.push(res);
    }
    return results;
}

async function fetchUrlsParallel(urls){
    const result = await Promise.all(
        urls.map(function(url){
            return axios.get(url);
        })
    );
    return result;
}
/**
 * Hàm fetchUrls
Thực hiện: Tuần tự (mỗi yêu cầu được thực hiện sau khi yêu cầu trước đã hoàn tất).
Kiểu trả về: Là một mảng chứa kết quả các yêu cầu.
Hàm fetchUrlsParallel
Thực hiện: Đồng thời (các yêu cầu được thực hiện đồng thời, không chờ đợi lẫn nhau).
Kiểu trả về: Là một mảng chứa kết quả các yêu cầu.
 */

//Bài 3
// let fs = require('fs');
// let axios = require('axios');
// const { log } = require('console');

// fs.readFile(
//     '.data.json',
//     {encoding: 'utf8'},
//     function(err,data){
//         console.log('Data loaded from disk', data);

//         axios.get('https://jsonplaceholder.typicode.com/todos/1')
//         .then(function(res){
//             console.log('Data downloaded form url',res.data);
//         });
//     }
// );

//Viết lại bằng asycn await với promise
const fs = require('fs').promises; // Sử dụng fs.promises để sử dụng promise trong fs
// const axios = require('axios');

async function loadData() {
    try {
        const fileData = await fs.readFile('lab4/data.json', { encoding: 'utf8' });
        console.log('Data loaded from disk', fileData);

        const urlData = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Data downloaded from url', urlData.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

loadData();

