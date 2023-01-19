const colors_item1 = document.querySelector('.colors_item:nth-child(1)');
const colors_item2 = document.querySelector('.colors_item:nth-child(2)');
const colors_item3 = document.querySelector('.colors_item:nth-child(3)');
const colors_item4 = document.querySelector('.colors_item:nth-child(4)');
const burger_color1 = document.querySelector('.burger_item:nth-child(4)');
const burger_color2 = document.querySelector('.burger_item:nth-child(3)');
const burger_color3 = document.querySelector('.burger_item:nth-child(2)');
const burger_color4 = document.querySelector('.burger_item:nth-child(1)');
const wrapper = document.querySelector('.wrapper');
const intro_body_info = document.querySelector('.intro_body_info');
const donut1 = document.querySelector('.skills_body_items .skills_body_item:nth-child(1) .donut');
const donut2 = document.querySelector('.skills_body_items .skills_body_item:nth-child(2) .donut');
const donut3 = document.querySelector('.skills_body_items .skills_body_item:nth-child(3) .donut');
const donut4 = document.querySelector('.skills_body_items .skills_body_item:nth-child(4) .donut');
const donut5 = document.querySelector('.skills_body_items .skills_body_item:nth-child(5) .donut');
const donut6 = document.querySelector('.skills_body_items .skills_body_item:nth-child(6) .donut');
const donut_dots = document.querySelectorAll('.donut_dot');
const works_body_track_dots = document.querySelectorAll('.works_body_track_dot');
const hobbies_donuts = document.querySelectorAll('.hobbies_donut');
const madeBy_heart = document.querySelector('.madeBy_heart');



colors_item1.addEventListener('click', () => {
	colors_item1.style.border = '3px solid #fff';
	colors_item2.style.border = '';
	colors_item3.style.border = '';
	colors_item4.style.border = '';
	burger_color1.style.border = '3px solid #fff';
	burger_color2.style.border = '';
	burger_color3.style.border = '';
	burger_color4.style.border = '';
	wrapper.style.background = 'linear-gradient(135deg, rgba(50,50,250,0.2), rgba(225,25,225,0.2))';
	intro_title.style.cssText = 'background: linear-gradient(135deg, rgb(50,50,250), rgb(225,25,225));-webkit-background-clip: text;-webkit-text-fill-color: transparent;';
	intro_body_info.style.background = 'linear-gradient(135deg, rgb(50,50,250), rgb(225,25,225))';
	donut1.style.background = 'conic-gradient(rgb(50,50,250), rgb(225,25,225) 88%, #ddd 92%)';
	donut2.style.background = 'conic-gradient(rgb(50,50,250), rgb(225,25,225) 78%, #ddd 82%)';
	donut3.style.background = 'conic-gradient(rgb(50,50,250), rgb(225,25,225) 68%, #ddd 72%)';
	donut4.style.background = 'conic-gradient(rgb(50,50,250), rgb(225,25,225) 58%, #ddd 62%)';
	donut5.style.background = 'conic-gradient(rgb(50,50,250), rgb(225,25,225) 48%, #ddd 52%)';
	donut6.style.background = 'conic-gradient(rgb(50,50,250), rgb(225,25,225) 38%, #ddd 42%)';
	for (let donut_dot of donut_dots) {donut_dot.style.background = 'rgb(50,50,250)';}
	for (let works_body_track_dot of works_body_track_dots) {works_body_track_dot.style.background = 'linear-gradient(135deg, rgb(50,50,250), rgb(225,25,225))';}
	for (let hobbies_donut of hobbies_donuts) {
		hobbies_donut.style.background = 'linear-gradient(135deg, rgb(50,50,250), rgb(225,25,225)';
	}
	madeBy_heart.innerHTML = '💜';
});



colors_item2.addEventListener('click', () => {
	colors_item1.style.border = '';
	colors_item2.style.border = '3px solid #fff';
	colors_item3.style.border = '';
	colors_item4.style.border = '';
	burger_color1.style.border = '';
	burger_color2.style.border = '3px solid #fff';
	burger_color3.style.border = '';
	burger_color4.style.border = '';
	wrapper.style.background = 'linear-gradient(135deg, rgba(50,150,250,0.2), rgba(25,225,25,0.4))';
	intro_title.style.cssText = 'background: linear-gradient(135deg, rgb(50,150,250), rgb(25,225,25));-webkit-background-clip: text;-webkit-text-fill-color: transparent;';
	intro_body_info.style.background = 'linear-gradient(135deg, rgb(50,150,250), rgb(25,225,25))';
	donut1.style.background = 'conic-gradient(rgb(50,150,250), rgb(25,225,25) 88%, #ddd 92%)';
	donut2.style.background = 'conic-gradient(rgb(50,150,250), rgb(25,225,25) 78%, #ddd 82%)';
	donut3.style.background = 'conic-gradient(rgb(50,150,250), rgb(25,225,25) 68%, #ddd 72%)';
	donut4.style.background = 'conic-gradient(rgb(50,150,250), rgb(25,225,25) 58%, #ddd 62%)';
	donut5.style.background = 'conic-gradient(rgb(50,150,250), rgb(25,225,25) 48%, #ddd 52%)';
	donut6.style.background = 'conic-gradient(rgb(50,150,250), rgb(25,225,25) 38%, #ddd 42%)';
	for (let donut_dot of donut_dots) {donut_dot.style.background = 'rgb(50,150,250)';}
	for (let works_body_track_dot of works_body_track_dots) {works_body_track_dot.style.background = 'linear-gradient(135deg, rgb(50,150,250), rgb(25,225,25))';}
	for (let hobbies_donut of hobbies_donuts) {
		hobbies_donut.style.background = 'linear-gradient(135deg, rgb(50,150,250), rgb(25,225,25)';
	}
	madeBy_heart.innerHTML = '💚';
});



colors_item3.addEventListener('click', () => {
	colors_item1.style.border = '';
	colors_item2.style.border = '';
	colors_item3.style.border = '3px solid #fff';
	colors_item4.style.border = '';
	burger_color1.style.border = '';
	burger_color2.style.border = '';
	burger_color3.style.border = '3px solid #fff';
	burger_color4.style.border = '';
	wrapper.style.background = 'linear-gradient(135deg, rgba(250,50,50,0.2), rgba(225,225,25,0.4))';
	intro_title.style.cssText = 'background: linear-gradient(135deg, rgb(250,50,50), rgb(225,225,25));-webkit-background-clip: text;-webkit-text-fill-color: transparent;';
	intro_body_info.style.background = 'linear-gradient(135deg, rgb(250,50,50), rgb(225,225,25))';
	donut1.style.background = 'conic-gradient(rgb(250,50,50), rgb(225,225,25) 88%, #ddd 92%)';
	donut2.style.background = 'conic-gradient(rgb(250,50,50), rgb(225,225,25) 78%, #ddd 82%)';
	donut3.style.background = 'conic-gradient(rgb(250,50,50), rgb(225,225,25) 68%, #ddd 72%)';
	donut4.style.background = 'conic-gradient(rgb(250,50,50), rgb(225,225,25) 58%, #ddd 62%)';
	donut5.style.background = 'conic-gradient(rgb(250,50,50), rgb(225,225,25) 48%, #ddd 52%)';
	donut6.style.background = 'conic-gradient(rgb(250,50,50), rgb(225,225,25) 38%, #ddd 42%)';
	for (let donut_dot of donut_dots) {donut_dot.style.background = 'rgb(250,50,50)';}
	for (let works_body_track_dot of works_body_track_dots) {works_body_track_dot.style.background = 'linear-gradient(135deg, rgb(250,50,50), rgb(225,225,25))';}
	for (let hobbies_donut of hobbies_donuts) {
		hobbies_donut.style.background = 'linear-gradient(135deg, rgb(250,50,50), rgb(225,225,25)';
	}
	madeBy_heart.innerHTML = '🧡';
});



colors_item4.addEventListener('click', () => {
	colors_item1.style.border = '';
	colors_item2.style.border = '';
	colors_item3.style.border = '';
	colors_item4.style.border = '3px solid #fff';
	burger_color1.style.border = '';
	burger_color2.style.border = '';
	burger_color3.style.border = '';
	burger_color4.style.border = '3px solid #fff';
	wrapper.style.background = 'linear-gradient(#ccc, #ccc)';
	intro_title.style.cssText = 'background: #111;-webkit-background-clip: text;-webkit-text-fill-color: transparent;';
	intro_body_info.style.background = '#111';
	donut1.style.background = 'conic-gradient(rgb(5,5,5), rgb(250,250,250) 88%, #ddd 92%)';
	donut2.style.background = 'conic-gradient(rgb(5,5,5), rgb(250,250,250) 78%, #ddd 82%)';
	donut3.style.background = 'conic-gradient(rgb(5,5,5), rgb(250,250,250) 68%, #ddd 72%)';
	donut4.style.background = 'conic-gradient(rgb(5,5,5), rgb(250,250,250) 58%, #ddd 62%)';
	donut5.style.background = 'conic-gradient(rgb(5,5,5), rgb(250,250,250) 48%, #ddd 52%)';
	donut6.style.background = 'conic-gradient(rgb(5,5,5), rgb(250,250,250) 38%, #ddd 42%)';
	for (let donut_dot of donut_dots) {donut_dot.style.background = 'rgb(5,5,5)';}
	for (let works_body_track_dot of works_body_track_dots) {works_body_track_dot.style.background = 'linear-gradient(135deg, rgb(0, 0, 0) 25%, rgb(250, 250, 250))';}
	for (let hobbies_donut of hobbies_donuts) {
		hobbies_donut.style.background = '#ccc';
	}
	madeBy_heart.innerHTML = '🤍';
});



burger_color1.addEventListener('click', () => {
	colors_item1.style.border = '3px solid #fff';
	colors_item2.style.border = '';
	colors_item3.style.border = '';
	colors_item4.style.border = '';
	burger_color1.style.border = '3px solid #fff';
	burger_color2.style.border = '';
	burger_color3.style.border = '';
	burger_color4.style.border = '';
	wrapper.style.background = 'linear-gradient(135deg, rgba(50,50,250,0.2), rgba(225,25,225,0.2))';
	intro_title.style.cssText = 'background: linear-gradient(135deg, rgb(50,50,250), rgb(225,25,225));-webkit-background-clip: text;-webkit-text-fill-color: transparent;';
	intro_body_info.style.background = 'linear-gradient(135deg, rgb(50,50,250), rgb(225,25,225))';
	donut1.style.background = 'conic-gradient(rgb(50,50,250), rgb(225,25,225) 88%, #ddd 92%)';
	donut2.style.background = 'conic-gradient(rgb(50,50,250), rgb(225,25,225) 78%, #ddd 82%)';
	donut3.style.background = 'conic-gradient(rgb(50,50,250), rgb(225,25,225) 68%, #ddd 72%)';
	donut4.style.background = 'conic-gradient(rgb(50,50,250), rgb(225,25,225) 58%, #ddd 62%)';
	donut5.style.background = 'conic-gradient(rgb(50,50,250), rgb(225,25,225) 48%, #ddd 52%)';
	donut6.style.background = 'conic-gradient(rgb(50,50,250), rgb(225,25,225) 38%, #ddd 42%)';
	for (let donut_dot of donut_dots) {donut_dot.style.background = 'rgb(50,50,250)';}
	for (let works_body_track_dot of works_body_track_dots) {works_body_track_dot.style.background = 'linear-gradient(135deg, rgb(50,50,250), rgb(225,25,225))';}
	for (let hobbies_donut of hobbies_donuts) {
		hobbies_donut.style.background = 'linear-gradient(135deg, rgb(50,50,250), rgb(225,25,225)';
	}
	madeBy_heart.innerHTML = '💜';
});



burger_color2.addEventListener('click', () => {
	colors_item1.style.border = '';
	colors_item2.style.border = '3px solid #fff';
	colors_item3.style.border = '';
	colors_item4.style.border = '';
	burger_color1.style.border = '';
	burger_color2.style.border = '3px solid #fff';
	burger_color3.style.border = '';
	burger_color4.style.border = '';
	wrapper.style.background = 'linear-gradient(135deg, rgba(50,150,250,0.2), rgba(25,225,25,0.4))';
	intro_title.style.cssText = 'background: linear-gradient(135deg, rgb(50,150,250), rgb(25,225,25));-webkit-background-clip: text;-webkit-text-fill-color: transparent;';
	intro_body_info.style.background = 'linear-gradient(135deg, rgb(50,150,250), rgb(25,225,25))';
	donut1.style.background = 'conic-gradient(rgb(50,150,250), rgb(25,225,25) 88%, #ddd 92%)';
	donut2.style.background = 'conic-gradient(rgb(50,150,250), rgb(25,225,25) 78%, #ddd 82%)';
	donut3.style.background = 'conic-gradient(rgb(50,150,250), rgb(25,225,25) 68%, #ddd 72%)';
	donut4.style.background = 'conic-gradient(rgb(50,150,250), rgb(25,225,25) 58%, #ddd 62%)';
	donut5.style.background = 'conic-gradient(rgb(50,150,250), rgb(25,225,25) 48%, #ddd 52%)';
	donut6.style.background = 'conic-gradient(rgb(50,150,250), rgb(25,225,25) 38%, #ddd 42%)';
	for (let donut_dot of donut_dots) {donut_dot.style.background = 'rgb(50,150,250)';}
	for (let works_body_track_dot of works_body_track_dots) {works_body_track_dot.style.background = 'linear-gradient(135deg, rgb(50,150,250), rgb(25,225,25))';}
	for (let hobbies_donut of hobbies_donuts) {
		hobbies_donut.style.background = 'linear-gradient(135deg, rgb(50,150,250), rgb(25,225,25)';
	}
	madeBy_heart.innerHTML = '💚';
});



burger_color3.addEventListener('click', () => {
	colors_item1.style.border = '';
	colors_item2.style.border = '';
	colors_item3.style.border = '3px solid #fff';
	colors_item4.style.border = '';
	burger_color1.style.border = '';
	burger_color2.style.border = '';
	burger_color3.style.border = '3px solid #fff';
	burger_color4.style.border = '';
	wrapper.style.background = 'linear-gradient(135deg, rgba(250,50,50,0.2), rgba(225,225,25,0.4))';
	intro_title.style.cssText = 'background: linear-gradient(135deg, rgb(250,50,50), rgb(225,225,25));-webkit-background-clip: text;-webkit-text-fill-color: transparent;';
	intro_body_info.style.background = 'linear-gradient(135deg, rgb(250,50,50), rgb(225,225,25))';
	donut1.style.background = 'conic-gradient(rgb(250,50,50), rgb(225,225,25) 88%, #ddd 92%)';
	donut2.style.background = 'conic-gradient(rgb(250,50,50), rgb(225,225,25) 78%, #ddd 82%)';
	donut3.style.background = 'conic-gradient(rgb(250,50,50), rgb(225,225,25) 68%, #ddd 72%)';
	donut4.style.background = 'conic-gradient(rgb(250,50,50), rgb(225,225,25) 58%, #ddd 62%)';
	donut5.style.background = 'conic-gradient(rgb(250,50,50), rgb(225,225,25) 48%, #ddd 52%)';
	donut6.style.background = 'conic-gradient(rgb(250,50,50), rgb(225,225,25) 38%, #ddd 42%)';
	for (let donut_dot of donut_dots) {donut_dot.style.background = 'rgb(250,50,50)';}
	for (let works_body_track_dot of works_body_track_dots) {works_body_track_dot.style.background = 'linear-gradient(135deg, rgb(250,50,50), rgb(225,225,25))';}
	for (let hobbies_donut of hobbies_donuts) {
		hobbies_donut.style.background = 'linear-gradient(135deg, rgb(250,50,50), rgb(225,225,25)';
	}
	madeBy_heart.innerHTML = '🧡';
});



burger_color4.addEventListener('click', () => {
	colors_item1.style.border = '';
	colors_item2.style.border = '';
	colors_item3.style.border = '';
	colors_item4.style.border = '3px solid #fff';
	burger_color1.style.border = '';
	burger_color2.style.border = '';
	burger_color3.style.border = '';
	burger_color4.style.border = '3px solid #fff';
	wrapper.style.background = 'linear-gradient(#ccc, #ccc)';
	intro_title.style.cssText = 'background: #111;-webkit-background-clip: text;-webkit-text-fill-color: transparent;';
	intro_body_info.style.background = '#111';
	donut1.style.background = 'conic-gradient(rgb(5,5,5), rgb(250,250,250) 88%, #ddd 92%)';
	donut2.style.background = 'conic-gradient(rgb(5,5,5), rgb(250,250,250) 78%, #ddd 82%)';
	donut3.style.background = 'conic-gradient(rgb(5,5,5), rgb(250,250,250) 68%, #ddd 72%)';
	donut4.style.background = 'conic-gradient(rgb(5,5,5), rgb(250,250,250) 58%, #ddd 62%)';
	donut5.style.background = 'conic-gradient(rgb(5,5,5), rgb(250,250,250) 48%, #ddd 52%)';
	donut6.style.background = 'conic-gradient(rgb(5,5,5), rgb(250,250,250) 38%, #ddd 42%)';
	for (let donut_dot of donut_dots) {donut_dot.style.background = 'rgb(5,5,5)';}
	for (let works_body_track_dot of works_body_track_dots) {works_body_track_dot.style.background = 'linear-gradient(135deg, rgb(0, 0, 0) 25%, rgb(250, 250, 250))';}
	for (let hobbies_donut of hobbies_donuts) {
		hobbies_donut.style.background = '#ccc';
	}
	madeBy_heart.innerHTML = '🤍';
});