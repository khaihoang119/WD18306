const PI = 3.1415;
class Circle {
    constructor(radius){
        this.r = radius
    }
    dienTich(){
        return this.r * this.r * PI;
    }
    chuVi(){
        return 2 * PI * this.r;
    }
}
let bankinh = new Circle(20);
console.log(bankinh.chuVi());
console.log(bankinh.dienTich());


const isEven = (number) => {
    return number % 2 === 0 ? "Số nguyễn chẳn" : "Số nguyên lẻ";
};
console.log(isEven(4));
console.log(isEven(7));


API_URL = 'http://localhost:3000/';

const products = 'products';

let totalLikes = 0;


function getProducts(){
    let html = '';
    let listProduct;
    axios({
        method: 'GET',
        url : API_URL + products
    }).then(res => {
        if(res.status === 200){
            console.log(res);
            listProduct = res.data;
            listProduct.forEach(element =>{
                totalLikes += element.likes;
                html += `
                <div>
                    <h1 class="title">${element.name}</h1>
                    <div>${element.id}</div>
                    <div>${element.price}</div>
                    <div>${element.likes}</div>
                </div>
                `
            });
            document.getElementById('total-likes').innerHTML = `Tổng số lượng likes: ${totalLikes}`;
            document.getElementById('list-product').innerHTML = html;
        }else{
            console.log(res.status); 
        }
    }).catch(function (error){
        console.log(error);
    });
};
getProducts();


