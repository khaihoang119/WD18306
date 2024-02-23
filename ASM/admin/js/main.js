document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.getElementById("content-container");

    // Sử dụng AJAX để tải nội dung từ trang khác
    function loadPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                contentContainer.innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    }

    // Gọi hàm để tải nội dung từ trang khác
    loadPage('navbar.html')
   
});
