$(document).ready(function() {
 
  displayProducts();
    
  function displayProducts() {
    $.ajax({
      url: '/step7/public/products',
      type: 'GET',
      dataType: 'json',
    })
    .done(function(response) {
      const products = response.products;
      console.log(response)
      displayProductList(response);
    })
    .fail(function(xhr, status, error) {
      console.error('Ajax Error:', status, error);
    });
  }
   // 商品テーブルを生成する共通の関数
   function displayProductList(products) {
    const productList = document.getElementById('product-list');
    //productList.innerHTML = ''; // リストを一旦クリア
    
    response.forEach(function(product) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.id}</td>
        <td><img src="${product.image_pass}"></td>
        <td>${product.name}</td>
        <td>¥${product.price}</td>
        <td>${product.stock}個</td>
        <td>${product.company.company_id}</td>
      `;
      productList.appendChild(row);
    });
  }
});