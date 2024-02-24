// Import Axios

export const API_URL = 'http://localhost:3000/';


// Hàm để lấy dữ liệu từ tệp JSON sử dụng Axios và Promise
export function fetchData() {
	return new Promise((resolve, reject) => {
		axios.get(`${API_URL}products?cate_id=`)
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

