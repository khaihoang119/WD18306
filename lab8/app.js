const API_URL = 'https://ecma-script-adcb2-default-rtdb.firebaseio.com/';

let getProducts = async () => {
    const response = await fetch(API_URL +'products.json');
    let data = await response.json();
    return data;
}
console.log(getProducts());

getProducts().then((data)=>{
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
                <td>${item.cate_id}</td>
                <td>${item.name} </td>
                <td>${item.image}</td>
                <td>sửa</td>
                <td>xóa</td>
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



let createProduct = (data) =>{
    console.log(data.elements.product_name.value);
    let object = {
        product_name: data.elements.product_name.value,
        product_image: data.elements.product_image.value 
    }
    let product = fetch(API_URL+'products.json',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
}