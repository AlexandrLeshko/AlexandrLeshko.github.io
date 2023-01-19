const slider = document.querySelector('.works_body_slider-item:nth-child(1)');
const slider_dot1 = document.querySelector('.works_body_track_dot:nth-child(1)');
const slider_dot2 = document.querySelector('.works_body_track_dot:nth-child(2)');
const slider_dot3 = document.querySelector('.works_body_track_dot:nth-child(3)');
const slider_dot4 = document.querySelector('.works_body_track_dot:nth-child(4)');

slider_dot1.addEventListener('click', () => {
	slider.style.marginLeft = '0%';
	slider_dot1.style.border = '3px solid #fff';
	slider_dot2.style.border = '';
	slider_dot3.style.border = '';
	slider_dot4.style.border = '';
});

slider_dot2.addEventListener('click', () => {
	slider.style.marginLeft = '-100%';
	slider_dot1.style.border = '';
	slider_dot2.style.border = '3px solid #fff';
	slider_dot3.style.border = '';
	slider_dot4.style.border = '';
});

slider_dot3.addEventListener('click', () => {
	slider.style.marginLeft = '-200%';
	slider_dot1.style.border = '';
	slider_dot2.style.border = '';
	slider_dot3.style.border = '3px solid #fff';
	slider_dot4.style.border = '';
});

slider_dot4.addEventListener('click', () => {
	slider.style.marginLeft = '-300%';
	slider_dot1.style.border = '';
	slider_dot2.style.border = '';
	slider_dot3.style.border = '';
	slider_dot4.style.border = '3px solid #fff';
});