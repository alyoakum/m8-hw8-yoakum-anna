// It is always helpful to use comments in your code!

var productsTab = document.getElementById('products');
var productsOptions = document.getElementById('products-list');

function toggleMenu() {
  console.log(this);
}

productsTab.addEventListener('mouseover', toggleMenu);
