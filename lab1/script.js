//Lab 1 2 3
let name = "Nguyễn Khải Hoàng";
let birthday = new Number("26/09/2004");
let major = "Webdesign";
let code = "PC07159";
let day = new Number("01/04/2024");
let yearold = day - birthday;
//array function
let sayHello = () => {
    console.log(`I'm ${name}, my birthday is ${birthday}, my major is ${major} and my code is ${code}`);
};
sayHello();

const API_URL = "https://official-joke-api.appspot.com/random_joke";
fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function (response) { 
        response.json().then(function (data) {
            let app = document.getElementById('lab13');

            let html = `<ul>
                <li>${data.type}</li>
                <li>${data.setup}</li>
                <li>${data.punchline}</li>
                <li>${data.id}</li>
            </ul>`
            
            app.innerHTML = html;
            console.log(data) ;
        })
    })
    .catch(function (err) {

    })

    //API 1
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data.data);
            let app = document.getElementById('lab14a') ;
            let list = data.data;
            let html = `<ul>
            <table class="table">
            <thead>
              <tr>
                <th scope="col">ID Nation</th>
                <th scope="col">IB Year</th>
                <th scope="col">Nation</th>
                <th scope="col">Population</th>
                <th scope="col">Slug Nation</th>
                <th scope="col">Year</th>
              </tr>
            </thead>                        
                        </ul>`
            list.forEach(element => {
               
                html += `
                <tbody>
              <tr>
                <th scope="row">${element['ID Nation']}</th>
                <td>${element['ID Year']}</td>
                <td>${element['Nation']}</td>
                <td>${element['Population']}</td>
                <td>${element['Slug Nation']}</td>
                <td>${element['Year']}</td>
              </tr>
              
            </tbody>
            
                `
            });
            
            app.innerHTML = html;
            
           
        })
    })
    .catch(function (err) {

    })

    //API 2
    fetch("https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students")
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            let app = document.getElementById('lab14b') ;
            let list = data;
            let html = `<ul>
            <table class="table">
            <thead>
              <tr>
                <th scope="col">Avatar</th>
                <th scope="col">Created At</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
              </tr>
            </thead>                        
                        </ul>`
            list.forEach(element => {
                
                html += `
                <tbody>
              <tr>
                <th scope="row"><img src="${element['avatar']}" alt=""></th>
                <td>${element['createdAt']}</td>
                <td>${element['id']}</td>
                <td>${element['name']}</td>
              </tr>
              
            </tbody>
            
                `
            });
            
            app.innerHTML = html;
            
           
        })
    })
    .catch(function (err) {

    })