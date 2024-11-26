const arrProduct = [
    new Product("Iphone X", 20, 8000),
    new Product("Iphone 11", 12, 8500),
    new Product("Iphone 12", 21, 8200),
    new Product("Iphone 13", 20, 9000)
];

function displayProduct() {
    const tableBody = document.getElementById('productTable').querySelector('tbody');
    tableBody.innerHTML = ""; // Clear existing rows
    let sum=0;
    let count=0;
    arrProduct.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>${product.number}</td>
                    <td>${product.price}</td>
                    <td>${product.getAmount()}</td>
                    <td>
                        <button onclick="editProduct('${product}')">Edit</button>
                        <button onclick="deleteProduct(${index})">Delete</button>
                    </td>
                `;
        tableBody.appendChild(row);
        sum+=product.getAmount();
        count+=product.number;
        document.getElementById("count").innerText = count;
        document.getElementById("sum").innerText = sum;
    });
}

function addNewProduct(product) {
    const newProduct = document.getElementById('newProduct').value.trim();
    if (newProduct) {
        arrProduct.push(newProduct);
        displayProduct();
        document.getElementById('newProduct').value = ""; // Clear input
    } else {
        alert("Please enter a product name.");
    }
}

function findProduct(product) {
    return arrProduct.indexOf(product);
}

function editProduct(product) {
    let index = findProduct(product)
    if (index === -1) {
        alert("Product not found!");
    } else {
        const newName = prompt("Enter new name for the product:", product);
        if (newName) {
            arrProduct[index] = newName.trim();
            displayProduct();
        }
    }
}

function deleteProduct(index) {
    // let index = findProduct(product)
    // if (index !== -1) {
        if (confirm(`Are you sure you want to delete "${index}"?`)) {
            arrProduct.splice(index, 1);
            displayProduct();
        }
    // } else {
    //     alert("Product not found!");
    // }
}

displayProduct();
