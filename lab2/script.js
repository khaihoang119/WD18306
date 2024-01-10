

//Bài 1
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

let makelist = (arr) => {
    let html = ``;

    arr.forEach(element => {

        html += `<li class="list-group-item text-danger">${element}</li>`;
    });
    return `<ul class="list-group">${html}</ul>`;

}

const failureList = makelist(result.failure);
//  console.log(failureList); kiểm tra
let app = document.getElementById('lab2.1');
app.innerHTML = failureList;


//Bài 2
const source = [1,2,3,4,5,6,7,8,9,10];
let removeFirstTwo = (list) =>{
    const [ a, b ,...arr ] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);
document.getElementById("lab2.2a").innerHTML = arr;
document.getElementById("lab2.2b").innerHTML = source;

//Bài 3
const arr1 =['JAN' , 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];
console.log(arr2);
document.getElementById("lab2.3").innerHTML = arr2;

//Bài 4
let spreadOut = () =>{
    let fragment = ['to', 'code'];
    let sentence = ['learning',...fragment,'is', 'fun'];
    return sentence;
}
console.log(spreadOut());
document.getElementById("lab2.4").innerHTML = spreadOut();



//Bài 5
function generateTableHeader(headerTitles) {
    let html = ``;
    headerTitles.forEach(element => {
        html += `<th>${element}</th>`;
    });
    return `<thead><tr>${html}</tr></thead>`;

}

function generateTableRowStudents(data) {
    let html = ``;

    return `<tr>
    <td>${data.id}</td>
    <td><img src="${data.avatar}"/></td>
    <td>${data.name}</td>
    <td>${data.createdAt}</td>
 </tr>`;
}
// Kiểm tra
// let object = {
//     id: 1,
//     name: "John",
//     avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfVwq-udrvaxUhLLelQff5sSkRbzS9lIpmJrdRxuZ4Z7jy_fuDjIlbFlQzfCr4TO_3_E&usqp=CAU",
//     createAt: ""
// }
// console.log(generateTableRowStudents(object));


function generateTable(header, data) {
    let html = "";
    let headerRow = generateTableHeader(header);
    data.forEach(element => {
        html += generateTableRowStudents(element);

    })
    return `<table class="table">${headerRow}<tbody>${html}</tbody></table>`;
}
let API_URL = "https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/";
fetch(API_URL + 'students')
    .then(function (response) {
        console.log(response);
        response.json().then(function (data) {
            console.log(data);
            let datafake = [
                {
                    "id": 1,
                    "name": "Nguyen Khai Hoang",
                    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfVwq-udrvaxUhLLelQff5sSkRbzS9lIpmJrdRxuZ4Z7jy_fuDjIlbFlQzfCr4TO_3_E&usqp=CAU",
                    "createdAt": "2024"
                },
                {
                    "id": 2,
                    "name": "Nguyen Khai Hang",
                    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfVwq-udrvaxUhLLelQff5sSkRbzS9lIpmJrdRxuZ4Z7jy_fuDjIlbFlQzfCr4TO_3_E&usqp=CAU",
                    "createdAt": "2024"
                }
            ];
            let header = [
                "ID",
                "Ảnh đại diện",
                "Tên",
                "Ngày tạo"
            ];

            let app = document.getElementById('app');
            app.innerHTML = generateTable(header, data);
            // app.innerHTML = generateTable(header, datafake); nếu api bị chặn thì dùng cái này
        })
    })
    .catch(function (err) {
        console.log("Error: \n" + response);
    })