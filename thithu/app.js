const PI = 3.1415;
class Circle {
    constructor(radius) {
        this.r = radius
    }
    dienTich() {
        return this.r * this.r * PI;
    }
    chuVi() {
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

// Hàm để lấy danh sách sản phẩm
function getProducts() {
    axios({
        method: 'GET',
        url: API_URL + products
    })
        .then(response => {
            if (response.status === 200) {
                displayProducts(response.data);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Hàm để hiển thị danh sách sản phẩm
function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <div>
                <h3>${product.name}</h3>
                <p>Prices: ${product.price}</p>
                <p>Likes: ${product.likes}</p>
                <p>id: ${product.id}</p>
                <button onclick="deleteProduct(${product.id})">Xóa</button>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}
getProducts();

// function getProductsSortedByID(){
//     axios({
//         method: 'GET',
//         url: API_URL + products
//     }).then(res => {
//         if(res.status === 200) {
//             console.log(res);
//             //sắp xếp danh sách sản phẩm theo id
//             const sortedProducts = res.data.sort((a,b) => a.id -b.id);
//             //in ra danh sách sản phẩm đã sắp xếp
//             console.log(sortedProducts);
//         }
//     })
//     .catch(error =>{
//         console.log(error);
//     });
// }
// getProductsSortedByID();

// Hàm để sắp xếp sản phẩm theo lượt like
function sortProductsByLikes(sortType) {
    axios({
        method: 'GET',
        url: API_URL + products,
        params: {
            _sort: sortType === 'ascending' ? 'likes' : '-likes'
        }
    })
        .then(response => {
            if (response.status === 200) {
                displayProducts(response.data);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}



// Bắt sự kiện khi form được submit
document.getElementById('sortForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const sortType = document.getElementById('sortType').value;
    sortProductsByLikes(sortType);
});

 // Bắt sự kiện khi form để thêm sản phẩm được submit
 document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const productLikes = document.getElementById('productLikes').value;
    const productPrices = document.getElementById('productPrices').value;
    addProduct(productName, productLikes, productPrices);
});



//  Hàm để thêm sản phẩm
 function addProduct(productName, productLikes, productPrices) {
    axios({
        method: 'POST',
        url: API_URL + products,
        data: {
            id: Date.now(),
            name: productName,
            likes: parseInt(productLikes),
            price: parseInt(productPrices)
        }
    })
    .then(response => {
        if (response.status === 200) {
            console.log('Product added successfully');
            // Sau khi thêm sản phẩm, lấy lại danh sách sản phẩm
            getProducts();
        }
    })
    .catch(error => {
        console.error('Error adding product:', error);
    });
}

// Hàm để xóa sản phẩm
function deleteProduct(productId) {
    axios({
        method: 'DELETE',
        url:  `${API_URL}${products}/${productId}`
    })
        .then(response => {
            if (response.status === 200) {
                console.log('Product deleted successfully');
                // Sau khi xóa sản phẩm, lấy lại danh sách sản phẩm
                getProducts();
            }
        })
        .catch(error => {
            console.error('Error deleting product:', error);
        });
}


// Load danh sách sản phẩm ban đầu
getProducts();

