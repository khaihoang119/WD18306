const API_URL = 'https://ecma-script-adcb2-default-rtdb.firebaseio.com/';

let getProducts = async () => {
    const response = await fetch(API_URL +'products.json');
    let data = await response.json();
    return data;
}
console.log(getProducts());

getProducts().then((data)=>{
    console.log(data);
    data = Object.entries(data);
    console.log(data);
    let html = `<table class="table table-primary">
    <thead>
    <tr>
    <th>ID </th>
    <th>Tên sản phẩm</th>
    <th>Hình ảnh</th>
    <th>Sửa</th>
    <th>Xóa</th>
</tr>
</thead>
<tbody>
    `;
    if(data.length){  
          //Vòng lặp, mỗi lần lập thì nối chuỗi tr vào trong thẻ body ở trên
        data.forEach(item =>{
            // dấu += là nối chỗi trong javascript
                html += `<tr class="">
                <td>${value[1].cate_id}</td>
                <td>${value[1].name} </td>
                <td>${value[1].image}</td>
                <td>sửa</td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${value[0]})">xóa</button></td>
            </tr>
                `
            })
    };
    html += `</tbody>
    </table>`;
    document.getElementById('product').innerHTML = html;
    console.log(data);
}).catch((error) =>{
    console.log(error);
})
let deleteProduct = (id) =>{
    
    fetch(API_URL + "products/" + id,{
        method: "DELETE",
    });
    
};
console.log(id);
//Cách làm thứ 1
// let createProduct = (data) =>{
//     console.log(data.elements.product_id.value);
//     let object = {
//         cate_id: data.elements.product_id.value,
//         name: data.elements.product_name.value,
//         image: data.elements.product_image.value 
//     }
//     let product = fetch(API_URL+'products.json',{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(object)
//     })
// }

//Cách làm thứ 2
let createProduct = (form) =>{
    console.log(form);
    let data = new FormData(form);
    console.log(data.get("cate_id"));
    console.log(data.get("product_name"));
    console.log(data.get("product_image"));

    let object = {
        cate_id: data.get("cate_id"),
        name: data.get("product_name"),
        image: data.get("product_image")
    };
    let product = fetch(API_URL+'products.json',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            })
            // document.getElementById("form").addEventListener("submit", (e) =>{
            //     e.preventDefault();
            //     console.log(this);
            // })
}

