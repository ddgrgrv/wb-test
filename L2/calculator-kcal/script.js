let products = JSON.parse(localStorage.getItem('products')) || [];
let totalCalories = 0;
let dailyGoal = parseInt(localStorage.getItem('dailyGoal')) || 0;

function renderProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        productList.innerHTML += `<li>${product.name} - ${product.calories} ккал <button onclick="removeProduct(${product.id})">Удалить</button></li>`;
    });
}

function addProduct() {
    const productName = document.getElementById('productName').value;
    const calories = parseInt(document.getElementById('calories').value);
    if (productName && calories) {
        const product = {
            id: Date.now(),
            name: productName,
            calories: calories
        };
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
    }

    renderProducts();
    updateTotalCalories(); 
}

function removeProduct(id) {
    products = products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
    renderProducts();
    renderProducts();
    updateTotalCalories(); 
}

function filterProducts() {
    const filterValue = document.getElementById('filter').value.toLowerCase();
    products = products.filter(product => product.name.toLowerCase().includes(filterValue));
    renderProducts();
}

function resetFilter() {
    document.getElementById('filter').value = '';
    products = JSON.parse(localStorage.getItem('products')) || [];
    renderProducts();
}

function sortProducts() {
    products.sort((a, b) => a.calories - b.calories);
    renderProducts();
}

function setDailyGoal() {
    dailyGoal = parseInt(document.getElementById('dailyGoal').value);
    localStorage.setItem('dailyGoal', dailyGoal);
    checkCalorieGoal();
}

function updateTotalCalories() {
    totalCalories = products.reduce((sum, product) => sum + product.calories, 0);
    document.getElementById('totalCalories').textContent = totalCalories;
    checkCalorieGoal();
}

function checkCalorieGoal() {
    const warningMessage = document.getElementById('warningMessage');
    if (totalCalories > dailyGoal && dailyGoal > 0) {
        warningMessage.textContent = 'Превышен дневной лимит калорий!';
    } else {
        warningMessage.textContent = '';
    }
}

window.onload = function () {
    renderProducts();
    updateTotalCalories();
    const savedGoal = localStorage.getItem('dailyGoal');
    if (savedGoal) {
        document.getElementById('dailyGoal').value = savedGoal;
    }
};

