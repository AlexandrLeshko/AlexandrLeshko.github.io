const lang = document.querySelector('.lang_switch');
const burger_lang = document.querySelector('.burger_lang');
const lang_dot = document.querySelector('.lang_switch_dot');
const resume = document.querySelector('.resume');
const mobile_resume = document.querySelector('.mobile-resume');
const intro_title = document.querySelector('.intro_title');
const story = document.querySelector('.story');
const skills_title = document.querySelector('.skills_title');
const english = document.querySelector('.skills_body_items .skills_body_item:nth-child(6) .skill');
const skills_body_info = document.querySelector('.skills_body_info');
const works_title = document.querySelector('.works_title');
const works_body_slider_item2 = document.querySelector('.works_body_slider-item:nth-child(2)');
const works_body_slider_item3 = document.querySelector('.works_body_slider-item:nth-child(3)');
const works_body_slider_item4 = document.querySelector('.works_body_slider-item:nth-child(4)');
const hobbies_title = document.querySelector('.hobbies_title');
const hobbies_body_info = document.querySelector('.hobbies_body_info');
const contacts_title = document.querySelector('.contacts_title');
const phone = document.querySelector('.contacts_body_column:nth-child(2)>div:nth-child(1)');

let lang_count = 0;

lang.addEventListener('click', () => {
	lang_count++;
	if (lang_count % 2 == 0){
		lang_dot.style.left = '2.5px';
		burger_lang.innerHTML = 'ru';
		resume.innerHTML = 'resume';
		mobile_resume.innerHTML = 'resume';
		intro_title.innerHTML = 'Hi there!';
		story.innerHTML = 'My name is Alexander Leshko. I was born and raised in a small town called Stolin. I studied at the gymnasium there and successfully completed it in 2018. After that, I entered the Belarusian State University of Informatics and Radioelectronics at the Faculty of Radio Engineering and Electronics, specializing in electronic information protection for the budget. In 2022 I successfully defended my diploma and graduated. Seems like nothing in common between me and a programmer? About this below . . .';
		skills_title.innerHTML = 'skills';
		english.innerHTML = 'English';
		skills_body_info.innerHTML = '<span class="tabulation"></span>In truth, studying at the university did not bring me pleasure. Even in the 1st year, I was sent to retake C++ 5 times, but not because of knowledge, but because I passed the labs at the wrong time. After that I decided that in no case I would connect my life with programming.<br><span class="tabulation"></span>But in the course of studying at the university, I met one teacher who was fond of developing mobile applications on Dart(Flutter) and so he directed me to the right path :) In 2 months I learned the basics of Dart (Flutter) and even wrote my first mobile application.<br><span class="tabulation"></span>Later I became interested in other languages. Learned SQL in a few days. Then I got acquainted with HTML and CSS, which I really liked. Having studied HTML and CSS well enough, I applied for the free courses of Rolling Scopes School. I liked the training there, I was spending 12-14 hours per day on layout and, surprisingly, did not burn out at all. But at some point, the layout task began to require JavaScript, which I didn’t know at all. So, I left the course . . . To learn this JavaScript :)';
		works_title.innerHTML = 'works';
		works_body_slider_item2.innerHTML = 'Actually, I don\'t have that many decent jobs, mostly small pet-projects that use some rare but very useful commands';
		works_body_slider_item3.innerHTML = 'Your advertising could be here :)';
		works_body_slider_item4.innerHTML = 'Your advertising could be here :)';
		hobbies_title.innerHTML = 'hobbies';
		hobbies_body_info.innerHTML = '<span class="tabulation"></span>Starting from the 8th grade, in my free time, I began to get involved in basketball, and in the 9th grade I learned about ping pong. After entering the university, I didn’t have any friends with whom I could go to play any of these games almost any day. On course 2, I tried to play pool and Russian billiards, I liked both games, I didn’t think that two games so similar in concept could be so different. Well, like almost all guys of my age I am fond of computer games.';
		contacts_title.innerHTML = 'contacts';
		phone.innerHTML = 'Phone: +375 (29) 725-64-07';
	} else {
		lang_dot.style.left = 'calc(100% - 17.5px)';
		burger_lang.innerHTML = 'en';
		resume.innerHTML = 'резюме';
		mobile_resume.innerHTML = 'резюме';
		intro_title.innerHTML = 'Приветствую!';
		story.innerHTML = 'Меня зовут Лешко Александр. Родился и вырос я в маленьком провинциальном городе под названием Столин. Там же я отучился в гимназии и успешно её закончил в 2018 году. После чего поступил в Белорусский государственный университет информатики и радиоэлектроники на факультет радиотехники и электроники на специальность радиоэлектронная защита информации на бюджет. В 2022 успешно защитил диплом и выпустился. Казалось бы что общего между мной и программистом? Об этом чуть ниже . . .';
		skills_title.innerHTML = 'навыки';
		english.innerHTML = 'Английский';
		skills_body_info.innerHTML = '<span class="tabulation"></span>По правде говоря обучение в универе не приносило мне удовольствия. Ещё на 1 курсе меня 5 раз отправили на пересдачу по C++, но не из-за знаний, а из-за того, что не вовремя сдал лабы. Именно после этого я решил, что ни в коем случае не хотел бы связывать свою жизнь с программированием.<br><span class="tabulation"></span>Но по ходу обучения в универе я познакомился с одним преподавателем, который увлекался разработкой мобильных приложений на Dart(Flutter) и вот он меня и направил на верный путь :) За 2 месяца я освоил основы Dart(Flutter) и даже написал своё первое мобильное приложение.<br><span class="tabulation"></span>Позже я стал интересоваться другими языками. За несколько дней освоил SQL. Затем познакомился с HTML и CSS, которые мне очень понравились. Изучив достаточно хорошо HTML и CSS я подался на бесплатные курсы Rolling Scopes School. Обучение там мне понравилось, я проводил по 12-14 часов за вёрсткой и на удивление абсолютно не выгорел. Но в какой-то момент в задании по вёрстке начали требовать JavaScript, который я совершенно не знал. Вобщем, я покинул курс . . . Чтобы изучить этот самый JavaScript :)';
		works_title.innerHTML = 'работы';
		works_body_slider_item2.innerHTML = 'На самом деле у меня не так уж и много достойных работ, в основном мелкие пет-проекты, в которых используются какие-нибудь редкие но очень полезные команды';
		works_body_slider_item3.innerHTML = 'Здесь могла бы быть ваша реклама :)';
		works_body_slider_item4.innerHTML = 'Здесь могла бы быть ваша реклама :)';
		hobbies_title.innerHTML = 'хобби';
		hobbies_body_info.innerHTML = '<span class="tabulation"></span>Начиная с 8 класса в свободное от учёбы время стал увлекаться баскетоболом, а в классе 9 узнал про настольный теннис. Поступив в универ у меня не осталось знакомых с которыми можно было бы почти в любой день пойти поиграть в любую из этих игр. На курсе 2 меня попробовал поиграть в пул и русский бильярд, обе игры мне понравились, не думал что две настолько похожие по концепции игры могут быть настолько разными. Ну и как практически все парни моего возраста увлекаюсь компьютерными играми.';
		contacts_title.innerHTML = 'контакты';
		phone.innerHTML = 'Телефон: +375 (29) 725-64-07';
	}
});



burger_lang.addEventListener('click', () => {
	lang_count++;
	if (lang_count % 2 == 0){
		lang_dot.style.left = '2.5px';
		burger_lang.innerHTML = 'ru';
		resume.innerHTML = 'resume';
		mobile_resume.innerHTML = 'resume';
		intro_title.innerHTML = 'Hi there!';
		story.innerHTML = 'My name is Alexander Leshko. I was born and raised in a small town called Stolin. I studied at the gymnasium there and successfully completed it in 2018. After that, I entered the Belarusian State University of Informatics and Radioelectronics at the Faculty of Radio Engineering and Electronics, specializing in electronic information protection for the budget. In 2022 I successfully defended my diploma and graduated. Seems like nothing in common between me and a programmer? About this below . . .';
		skills_title.innerHTML = 'skills';
		english.innerHTML = 'English';
		skills_body_info.innerHTML = '<span class="tabulation"></span>In truth, studying at the university did not bring me pleasure. Even in the 1st year, I was sent to retake C++ 5 times, but not because of knowledge, but because I passed the labs at the wrong time. After that I decided that in no case I would connect my life with programming.<br><span class="tabulation"></span>But in the course of studying at the university, I met one teacher who was fond of developing mobile applications on Dart(Flutter) and so he directed me to the right path :) In 2 months I learned the basics of Dart (Flutter) and even wrote my first mobile application.<br><span class="tabulation"></span>Later I became interested in other languages. Learned SQL in a few days. Then I got acquainted with HTML and CSS, which I really liked. Having studied HTML and CSS well enough, I applied for the free courses of Rolling Scopes School. I liked the training there, I was spending 12-14 hours per day on layout and, surprisingly, did not burn out at all. But at some point, the layout task began to require JavaScript, which I didn’t know at all. So, I left the course . . . To learn this JavaScript :)';
		works_title.innerHTML = 'works';
		works_body_slider_item2.innerHTML = 'Actually, I don\'t have that many decent jobs, mostly small pet-projects that use some rare but very useful commands';
		works_body_slider_item3.innerHTML = 'Your advertising could be here :)';
		works_body_slider_item4.innerHTML = 'Your advertising could be here :)';
		hobbies_title.innerHTML = 'hobbies';
		hobbies_body_info.innerHTML = '<span class="tabulation"></span>Starting from the 8th grade, in my free time, I began to get involved in basketball, and in the 9th grade I learned about ping pong. After entering the university, I didn’t have any friends with whom I could go to play any of these games almost any day. On course 2, I tried to play pool and Russian billiards, I liked both games, I didn’t think that two games so similar in concept could be so different. Well, like almost all guys of my age I am fond of computer games.';
		contacts_title.innerHTML = 'contacts';
		phone.innerHTML = 'Phone: +375 (29) 725-64-07';
	} else {
		lang_dot.style.left = 'calc(100% - 17.5px)';
		burger_lang.innerHTML = 'en';
		resume.innerHTML = 'резюме';
		mobile_resume.innerHTML = 'резюме';
		intro_title.innerHTML = 'Приветствую!';
		story.innerHTML = 'Меня зовут Лешко Александр. Родился и вырос я в маленьком провинциальном городе под названием Столин. Там же я отучился в гимназии и успешно её закончил в 2018 году. После чего поступил в Белорусский государственный университет информатики и радиоэлектроники на факультет радиотехники и электроники на специальность радиоэлектронная защита информации на бюджет. В 2022 успешно защитил диплом и выпустился. Казалось бы что общего между мной и программистом? Об этом чуть ниже . . .';
		skills_title.innerHTML = 'навыки';
		english.innerHTML = 'Английский';
		skills_body_info.innerHTML = '<span class="tabulation"></span>По правде говоря обучение в универе не приносило мне удовольствия. Ещё на 1 курсе меня 5 раз отправили на пересдачу по C++, но не из-за знаний, а из-за того, что не вовремя сдал лабы. Именно после этого я решил, что ни в коем случае не хотел бы связывать свою жизнь с программированием.<br><span class="tabulation"></span>Но по ходу обучения в универе я познакомился с одним преподавателем, который увлекался разработкой мобильных приложений на Dart(Flutter) и вот он меня и направил на верный путь :) За 2 месяца я освоил основы Dart(Flutter) и даже написал своё первое мобильное приложение.<br><span class="tabulation"></span>Позже я стал интересоваться другими языками. За несколько дней освоил SQL. Затем познакомился с HTML и CSS, которые мне очень понравились. Изучив достаточно хорошо HTML и CSS я подался на бесплатные курсы Rolling Scopes School. Обучение там мне понравилось, я проводил по 12-14 часов за вёрсткой и на удивление абсолютно не выгорел. Но в какой-то момент в задании по вёрстке начали требовать JavaScript, который я совершенно не знал. Вобщем, я покинул курс . . . Чтобы изучить этот самый JavaScript :)';
		works_title.innerHTML = 'работы';
		works_body_slider_item2.innerHTML = 'На самом деле у меня не так уж и много достойных работ, в основном мелкие пет-проекты, в которых используются какие-нибудь редкие но очень полезные команды';
		works_body_slider_item3.innerHTML = 'Здесь могла бы быть ваша реклама :)';
		works_body_slider_item4.innerHTML = 'Здесь могла бы быть ваша реклама :)';
		hobbies_title.innerHTML = 'хобби';
		hobbies_body_info.innerHTML = '<span class="tabulation"></span>Начиная с 8 класса в свободное от учёбы время стал увлекаться баскетоболом, а в классе 9 узнал про настольный теннис. Поступив в универ у меня не осталось знакомых с которыми можно было бы почти в любой день пойти поиграть в любую из этих игр. На курсе 2 меня попробовал поиграть в пул и русский бильярд, обе игры мне понравились, не думал что две настолько похожие по концепции игры могут быть настолько разными. Ну и как практически все парни моего возраста увлекаюсь компьютерными играми.';
		contacts_title.innerHTML = 'контакты';
		phone.innerHTML = 'Телефон: +375 (29) 725-64-07';
	}
});