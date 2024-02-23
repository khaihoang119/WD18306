import * as allproducts from './modules/products/all_products.js';
import * as ring_products from './modules/products/ring_products.js';
import * as form_products from './modules/products/products.js';
import * as necklace_products from './modules/products/necklace_products.js';
import * as bracelet_products from './modules/products/bracelet_products.js';
//lấy và in ra tất cả sản phẩm
allproducts.fetchData()
	.then(data => {
		// Xử lý dữ liệu và hiển thị nó trong HTML
		const dataContainer = document.getElementById('necklace-product');
		dataContainer.innerHTML = '';
		data.forEach(product => {
			const productDiv = document.createElement('div');
			productDiv.className = 'swiper-slide';
			productDiv.innerHTML = `
<div class="swiper-slide">
<div class="product-card position-relative">
  <div class="image-holder">
    <img src="assets/images/${product.image}" alt="product-item" class="img-fluid">
  </div>
  <div class="cart-concern position-absolute">
    <div class="cart-button d-flex">
      <a href="#" class="btn btn-medium btn-black">Add to Cart<svg class="cart-outline"><use xlink:href="#cart-outline"></use></svg></a>
    </div>
  </div>
  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
    <h3 class="card-title text-uppercase">
      <a href="#">${product.name}</a>
    </h3>
    <span class="item-price text-primary">${product.price}</span>
  </div>
</div>
</div>
          
`;
			dataContainer.appendChild(productDiv);
		});
	})
	.catch(error => console.error('Error fetching data:', error));

//lấy và in ra sản phẩm nhẫn
ring_products.fetchData()
	.then(data => {
		// Xử lý dữ liệu và hiển thị nó trong HTML
		const dataContainer = document.getElementById('ring-product');
		dataContainer.innerHTML = '';
		form_products.products(data, dataContainer);
	})
	.catch(error => console.error('Error fetching data:', error));

//Lấy và in ra sản phẩm vòng cổ
necklace_products.fetchData()
	.then(data => {
		// Xử lý dữ liệu và hiển thị nó trong HTML
		const dataContainer = document.getElementById('necklace-product');
		dataContainer.innerHTML = '';
		form_products.products(data, dataContainer);
	})
	.catch(error => console.error('Error fetching data:', error));
//Lấy và in ra sản phẩm vòng tay
bracelet_products.fetchData()
	.then(data => {
		// Xử lý dữ liệu và hiển thị nó trong HTML
		const dataContainer = document.getElementById('bracelet-product');
		dataContainer.innerHTML = '';
		form_products.products(data, dataContainer);
	})
	.catch(error => console.error('Error fetching data:', error));