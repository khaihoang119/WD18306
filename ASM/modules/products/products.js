export function products(data,dataContainer) {
	return data.forEach(product => {
		const productDiv = document.createElement('div');
		productDiv.className = 'col-lg-3 col-md-6 col-sm-12 pb-1';
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
          <a href="" class="btn btn-sm text-dark p-2"><i class="fas fa-eye text-primary mr-1"></i>Xem chi tiết</a>
          <a href="" class="btn btn-sm text-dark p-2"><i class="fas fa-shopping-cart text-primary mr-1"></i>Thêm vào giỏ</a>
      </div>
    </div>
    
    
    `;
		dataContainer.appendChild(productDiv);
	});
}