import * as allproducts from './modules/products/all_products.js';
import * as ring_products from './modules/products/ring_products.js';
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
		data.forEach(product => {
			const productDiv = document.createElement('div');
			productDiv.className = 'col-lg-4 col-md-6 col-sm-12 pb-1';
			productDiv.innerHTML = `
      
      <div class="card product-item border-0 mb-4">
          <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img class="img-fluid w-100" src="../images/${product.image}" alt="">
          </div>
          <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 class="text-truncate mb-3">${product.name}</h6>
              <div class="d-flex justify-content-center">
                  <h6>${product.price}$</h6><h6 class="text-muted ml-2"><del>${product.price}</del></h6>
              </div>
          </div>
          <div class="card-footer d-flex justify-content-between bg-light border">
              <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
              <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
          </div>
      </div>
      
        
`;
			dataContainer.appendChild(productDiv);
		});
	})
	.catch(error => console.error('Error fetching data:', error));