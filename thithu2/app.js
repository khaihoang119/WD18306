//Câu 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
}

//Câu 2
const filterEvenNumbers = (arr) => {
    return arr.filter(num => num % 2 === 0);
};

// Ví dụ sử dụng:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

//hàm để kết nối dữ liệu
const API_URL = 'http://localhost:3000/';
var productEndpoints = 'products';
function getProducts() {
    axios({
        method: 'GET',
        url: API_URL + productEndpoints
    }).then(res => {
        if (res.status === 200) {
            displayProducts(res.data);
        }
    }).catch(error => {
        console.error('Lỗi kết nối dữ liệu', error);
    });
}
//Hàm để hiển thị danh sách sản phẩm
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        productList.innerHTML += `
        <div>
                <h3>${product.name}</h3>
                <p>Prices: ${product.price}</p>
                <p>Danh mục: ${product.type}</p>
                <p>id: ${product.id}</p>
                <button onclick="openEditModal(${product.id}, '${product.name}', ${product.price}, '${product.type}')">Sửa</button>
                <button onclick="deleteProduct(${product.id})">Xóa</button>
            </div>
        `;
    });
}


//Bắt sự kiện form để thêm sản phẩm được submit
document.getElementById('addproduct').addEventListener('submit', function (e) {
    e.preventDefault();
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productType = document.getElementById('productType').value;

    // Kiểm tra xem liệu các trường input có rỗng hay không
    //  if (!productName || !productPrice || !productType) {
    //     document.getElementById('errorMessage').textContent = 'Please fill in all fields.';
    //     return;
    // }

    // // Kiểm tra xem giá trị nhập vào có hợp lệ hay không (ví dụ: giá sản phẩm và số lượng likes không âm)
    // if (parseInt(productPrice) <= 0) {
    //     document.getElementById('errorMessage').textContent = 'Please enter valid values.';
    //     return;
    // }
    // Bắt lỗi tên sản phẩm
    if (!productName) {
        document.getElementById('productNameError').textContent = 'Vui lòng nhập tên sản phẩm.';
        return;
    }
    document.getElementById('productNameError').textContent = ''; // Xóa thông báo lỗi nếu hợp lệ

    // Bắt lỗi giá sản phẩm
    if (parseInt(productPrice) <= 0 || !parseInt(productPrice)) {
        document.getElementById('productPriceError').textContent = 'Vui lòng nhập giá tiền và nhập hợp lệ.';
        return;
    }
    document.getElementById('productPriceError').textContent = ''; // Xóa thông báo lỗi nếu hợp lệ
    // Nếu dữ liệu hợp lệ, thực hiện hàm thêm sản phẩm
    addProduct(productName, productPrice, productType);
});

//Hàm để thêm sản phẩm
function addProduct(productName, productPrice, productType) {
    axios({
        method: 'POST',
        url: API_URL + productEndpoints,
        data: {
            id: Date.now(),
            name: productName,
            price: parseInt(productPrice),
            type: productType
        }
    }).then(res => {
        if (res.status === 200) {
            console.log('Product added successfully');
            // Sau khi thêm sản phẩm, lấy lại danh sách sản phẩm
            getProducts();
        }
    }).catch(error => {
        console.error('Error adding product:', error);
    });
}
//Hàm để xóa sản phẩm
function deleteProduct(productId){
    axios({
        method: 'DELETE',
        url: `${API_URL}${productEndpoints}/${productId}`
    }).then(response => {
        if(response.status === 200){
            console.log('Xoá sản phẩm thành công');
            //sau khi xóa sản phẩm, lấy lại danh sách sản phẩm
            getProducts();
        }
    }).catch(error =>{
        console.error('lỗi xóa sản phẩm', error);
    });
}
let currentProductId;

// Hàm để mở modal chỉnh sửa và điền thông tin sản phẩm
function openEditModal(productId, productName, productPrice, productType) {
    
    const modal = document.getElementById('editProductModal');
    const productNameInput = document.getElementById('editProductName');
    const productPriceInput = document.getElementById('editProductPrice');
    const productTypeInput = document.getElementById('editProductType');
    currentProductId = productId;
    productNameInput.value = productName;
    productPriceInput.value = productPrice;
    productTypeInput.value = productType;

    modal.style.display = 'block';
}

// Hàm để đóng modal chỉnh sửa
function closeEditModal() {
    const modal = document.getElementById('editProductModal');
    modal.style.display = 'none';
}

// Sự kiện để xử lý khi form chỉnh sửa sản phẩm được gửi đi
document.getElementById('editProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const productId = currentProductId // Lấy productId từ đâu đó
    const productName = document.getElementById('editProductName').value;
    const productPrice = document.getElementById('editProductPrice').value;
    const productType = document.getElementById('editProductType').value;

    // Gọi hàm để chỉnh sửa sản phẩm
    editProduct(productId, productName, productPrice, productType);

    // Đóng modal chỉnh sửa sau khi gửi đi
    closeEditModal();
});

// Hàm để gửi yêu cầu chỉnh sửa sản phẩm đến máy chủ
function editProduct(productId, productName, productPrice, productType) {
    axios({
        method: 'PUT',
        url: `${API_URL}${productEndpoints}/${productId}`,
        data: {
            name: productName,
            price: parseInt(productPrice),
            type: productType
        }
    })
    .then(response => {
        if (response.status === 200) {
            console.log('Chỉnh sửa sản phẩm thành công');
            // Cập nhật danh sách sản phẩm hoặc thực hiện các hành động khác nếu cần
            getProducts();
        }
    })
    .catch(error => {
        console.error('Lỗi khi chỉnh sửa sản phẩm:', error);
    });
}

getProducts();