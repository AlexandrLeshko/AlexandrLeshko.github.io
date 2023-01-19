const mobile_header_open = document.querySelector('.mobile-header_open');
const burger = document.querySelector('.burger');
const burger_close = document.querySelector('.burger_close');



mobile_header_open.addEventListener('click', ()=>{
	mobile_header_open.style.display = 'none';
	burger.style.top = '0';
});
burger_close.addEventListener('click', ()=>{
	mobile_header_open.style.display = 'block';
	burger.style.top = '-100vh';
});