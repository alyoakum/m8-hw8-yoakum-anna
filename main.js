// It is always helpful to use comments in your code!

var productsTab = document.getElementById('products');
var productsOptions = document.querySelector('products-list');

//dropdown
function dropdown() {
  productsOptions.classList.add('show-menu');

productsTab.addEventListener('mouseover', dropdown);

function disappear() {
  productsOptions.classList.remove('show-menu');
}
productsTab.addEventListener('mouseleave', disappear);
