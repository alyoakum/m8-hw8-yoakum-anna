//products
var productsTab = document.getElementById('products');
var productsOptions = document.querySelector('.products');

//products dropdown
function dropdown() {
  productsOptions.classList.add('show-menu');
}
productsTab.addEventListener('mouseover', dropdown);

//products hide
function disappear() {
  productsOptions.classList.remove('show-menu');
}
productsTab.addEventListener('mouseleave', disappear);

//services
var servicesTab = document.getElementById('services');
var servicesOptions = document.querySelector('.services');

//services dropdown
function dropdown2() {
  servicesOptions.classList.add('show-menu');
}
servicesTab.addEventListener('mouseover', dropdown2);

//services hide
function disappear2() {
  servicesOptions.classList.remove('show-menu');
}
services.addEventListener('mouseleave', disappear2);

//company
var companyTab = document.getElementById('company');
var companyOptions = document.querySelector('.company');

//company dropdown
function dropdown3() {
  companyOptions.classList.add('show-menu');
}
companyTab.addEventListener('mouseover', dropdown3);

//company hide
function disappear3() {
  companyOptions.classList.remove('show-menu');
}
company.addEventListener('mouseleave', disappear3);
