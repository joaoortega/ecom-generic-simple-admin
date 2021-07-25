const formAddProduct = document.getElementById('formInsertProduct');
const formAddCustomer = document.getElementById('formInsertCustomer');


formAddProduct.addEventListener('submit', (e) => {
    e.preventDefault();
    let productSku = document.getElementById('sku').value;
    let productName = document.getElementById('prodname').value;
    let productBrand = document.getElementById('brand').value;
    let productSize = document.getElementById('size').value;
    let productStock = document.getElementById('stock').value;

    let productData = {
        productSku,
        productName,
        productBrand,
        productSize,
        productStock
    }

    let convertedProductData = JSON.stringify(productData);
    localStorage.setItem('registeredProducts', convertedProductData);
    alert(`Produto ${productName} cadastrado com sucesso.`);
 
    location.reload();
})


formAddCustomer.addEventListener('submit', (e) => {
    e.preventDefault();
    let customerName = document.getElementById('name').value;
    let customerEmail = document.getElementById('email').value;
    let customerPhone = document.getElementById('phone').value;
    let customerAddress = document.getElementById('address').value;
    let customerCpf = document.getElementById('cpf').value;

    let customerData = {
        customerName,
        customerEmail,
        customerPhone,
        customerAddress,
        customerCpf
    }

    let convertedCustomerData = JSON.stringify(customerData);
    localStorage.setItem('registeredCustomers', convertedCustomerData);
    alert(`Cliente ${customerName} cadastrado com sucesso.`);

    location.reload();
})


let customerBtn = document.getElementById('formInsertCustomer')
let productBtn = document.getElementById('formInsertProduct')

function showProductForm() {
    customerBtn.style.display='none';
    productBtn.style.display='block';
}

function showCustomerForm() {
    productBtn.style.display='none';
    customerBtn.style.display='block';
}
