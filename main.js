// It is always helpful to use comments in your code!

var productsTab = document.getElementById('products');
var productsOptions = document.querySelector('products-list');

function toggleMenu() {
  console.log(this);
  productsOptions.classList.add('show-menu')
}

productsTab.addEventListener('mouseover', toggleMenu);
