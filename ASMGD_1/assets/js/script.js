(function($) {

    "use strict";

    var searchPopup = function() {
      // open search box
      $('#header-nav').on('click', '.search-button', function(e) {
        $('.search-popup').toggleClass('is-visible');
      });

      $('#header-nav').on('click', '.btn-close-search', function(e) {
        $('.search-popup').toggleClass('is-visible');
      });
      
      $(".search-popup-trigger").on("click", function(b) {
          b.preventDefault();
          $(".search-popup").addClass("is-visible"),
          setTimeout(function() {
              $(".search-popup").find("#search-popup").focus()
          }, 350)
      }),
      $(".search-popup").on("click", function(b) {
          ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
          $(this).removeClass("is-visible"))
      }),
      $(document).keyup(function(b) {
          "27" === b.which && $(".search-popup").removeClass("is-visible")
      })
    }

    var initProductQty = function(){

      $('.product-qty').each(function(){

        var $el_product = $(this);
        var quantity = 0;

        $el_product.find('.quantity-right-plus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($el_product.find('#quantity').val());
            $el_product.find('#quantity').val(quantity + 1);
        });

        $el_product.find('.quantity-left-minus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($el_product.find('#quantity').val());
            if(quantity>0){
              $el_product.find('#quantity').val(quantity - 1);
            }
        });

      });

    }

    $(document).ready(function() {

      searchPopup();
      initProductQty();

      var swiper = new Swiper(".main-swiper", {
        speed: 500,
        navigation: {
          nextEl: ".swiper-arrow-prev",
          prevEl: ".swiper-arrow-next",
        },
      });         

      var swiper = new Swiper(".product-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: "#mobile-products .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
      });      

      var swiper = new Swiper(".product-watch-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: "#smart-watches .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
      }); 

      var swiper = new Swiper(".testimonial-swiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-arrow-prev",
          prevEl: ".swiper-arrow-next",
        },
      }); 

    }); // End of a document ready

})(jQuery);

// Import Axios
const API_URL1 = 'http://localhost:3000/categories';
const API_URL2 = 'http://localhost:3000/products';
const API_URL3 = 'http://localhost:3000/orders';
const API_URL4 = 'http://localhost:3000/order_details';
const API_URL = 'http://localhost:3000/';


// Hàm để lấy dữ liệu từ tệp JSON sử dụng Axios và Promise
function fetchData(categoryId) {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/products?cate_id=${categoryId}`)
      .then(products => {
       
        for (let i = 0; i < products.length; i++) {
          const product = products[i];
          console.log(product.name);
          console.log(product.price);
          // ...
        } 
        // Kiểm tra nếu response không thành công (status code không phải 200)
        if (products.status !== 200) {
          throw new Error(`Failed to fetch data. Status: ${products.status}`);
        }

        // Resolve Promise với dữ liệu từ tệp JSON
        resolve(products.data);
      })
      .catch(error => reject(error));
  });
}

// Sử dụng Promise để lấy dữ liệu và xử lý nó
const categoryIdNecklace = 4;
fetchData(categoryIdNecklace)
.then(data => {
      // Xử lý dữ liệu và hiển thị nó trong HTML
      const dataContainer = document.getElementById("necklace-product");
  dataContainer.innerHTML = '';
  data.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "swiper-slide";
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

const categoryIdRing = 5;
fetchData(categoryIdRing)
.then(data => {
      // Xử lý dữ liệu và hiển thị nó trong HTML
      const dataContainer = document.getElementById("ring-product");
  dataContainer.innerHTML = '';
  data.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "swiper-slide";
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