window.addEventListener('DOMContentLoaded', function () {
	'use strick';
	// work with tabs>>>>>>>>>>>>>>>>>>>
	let wrappTabs = document.querySelector('.info-header'),
		tabs = document.querySelectorAll('.info-header-tab'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hidden(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.add('hide');
			tabContent[i].classList.remove('show');
		}
	}
	hidden(1);
	wrappTabs.addEventListener('click', (event) => {
		if (event.target && event.target.classList.contains('info-header-tab')) {
			tabs.forEach(function (item, i) {
				if (item == event.target) {
					hidden(0);
					tabContent[i].classList.remove('hide');
					tabContent[i].classList.add('show');
				}
			});
		}

	});

	// timer MY CODE >>>>>>>>><<<<<<!!!!!!!!!!!!!!!!
	let runStop = setTimeout(function getTimeRemainig() {
		let timedead = '2019-09-27';
		let time = new Date();
		let timeLocal = time.getHours();
		let timeUTC = time.getUTCHours();
		let kTime = timeLocal - timeUTC;
		let t = Date.parse(timedead) - Date.parse(time);
		let seconds = Math.floor(t / 1000 % 60),
			minutes = Math.floor(t / 1000 / 60 % 60),
			hours = Math.floor(t / (1000 * 60 * 60) - kTime),
			secondPage = document.querySelector('.seconds'),
			minutePage = document.querySelector('.minutes'),
			hourPage = document.querySelector('.hours');
		// console.log(seconds,minutes,hours);
		if (seconds < 0 && minutes < 0) {
			secondPage.textContent = '00';
			minutePage.textContent = '00';
			hourPage.textContent = '00';
			clearTimeout(runStop);
			return;
		} else {
			secondPage.textContent = addZero(seconds);
			minutePage.textContent = addZero(minutes);
			hourPage.textContent = addZero(hours);
			setTimeout(getTimeRemainig, 1000);
		}

		function addZero(num) {
			if (parseInt(num / 10) == 0) {
				return '0' + num;
			} else {
				return num;
			}
		}
	});
	//MY CODE END TIMER<<<<<<<<<<<<<<<

	//code dont mine<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	/*
   let deadline = '2019-09-23';
	function getTimeRemainig(endtime){
		let t = Date.parse(endtime)-Date.parse(new Date()),
			seconds = Math.floor(t/1000%60),
			minutes = Math.floor(t/1000/60%60),
			hours = Math.floor(t/1000/60/60);
			return {
				'total':t,
				'hour': hours,
				'minute': minutes,
				'second': seconds
			};
	}
	function setClock(id,endtime){
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(appdateClock,1000);
			function appdateClock(){
				let t = getTimeRemainig(endtime);
				function addZero(num){
					if(parseInt(num/10)==0){
						return '0'+num;
					}else{
						return num;
					}
				}
				hours.textContent = addZero(t.hour);
				minutes.textContent = addZero(t.minute);
				seconds.textContent = addZero(t.second);
				if(t.total<0){
					clearTimeout(timeInterval);
					hours.textContent='00';
					minutes.textContent='00';
					seconds.textContent ='00';
				}

			}
	}
	setClock('timer',deadline);
	*/
	// modal window close/open????????
	let btn = document.querySelector('.more'),
		lay = document.querySelector('.overlay'),
		closeMW = document.querySelector('.popup-close');
	btn.addEventListener('click', function () {
		lay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflowY = 'hidden';
	});
	closeMW.addEventListener('click', () => {
		lay.style.display = '';
		document.body.style.overflow = '';
		btn.classList.remove('more-splash');
	});
	let info = document.querySelector('.info');
	let btnInfo = document.querySelectorAll('.description-btn');
	info.addEventListener('click', (event) => {
		if (event.target && event.target.classList.contains('description-btn')) {
			lay.style.display = 'block';
			document.body.style.overflowY = 'hidden';
		}
	});
	// Class options>>>>>>>>>>>>>>>>>>>>>>>>>

	class Options {
		constructor(height, width, bg, fontSize, textAling) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAling = textAling;
		}
		creatElem(text) {
			let elem = document.createElement('div');
			document.body.appendChild(elem);
			elem.textContent = text;
			elem.style.cssText = `height:${this.height}; width:${this.width}; background:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAling}`;

		}
	}
	let options = new Options('200px', 'auto', '#323232', '14px', 'center');
	options.creatElem('aasdasd');
	console.log(options.height);

	// FORMA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	let message = {
		loading: "Загрузка...",
		success: ' Спасибо, Скоро мы свами свяжемся!',
		failure: 'Что-то пошло не так...'
	};
	let form = document.querySelector('.main-form'),
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');
	statusMessage.classList.add('status');
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		form.appendChild(statusMessage);
		let formData = new FormData(form);
		let obj = {};
		formData.forEach((value, key) => {
			obj[key] = value;
		});
		console.log(obj);
		let json = JSON.stringify(obj);


		function postData() {
			return new Promise(function (resolve, reject) {
				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');
				// request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
				request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); // для отправки JSON
				// для отправки в JSON нужно formData преобразовать в обычный объект
				// для этого используем forEach<<<<<<<<<<<<<<<<<<<<<<<<<<<
				// let obj={};
				// formData.forEach((value,key)=>{
				// 	obj[key]=value;
				// });
				// console.log(obj);
				// let json = JSON.stringify(obj);
				// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

				// замена formData на json
				request.addEventListener('readystatechange', () => {
					if (request.readyState < 4) {
						resolve();

					} else if (request.readyState == 4 && request.status == 200) {
						resolve();
					} else {
						reject();
					}

				});

				request.send(json);
			});

		}
		postData().then(messLoad).then(messSuc).catch(messFail).then(clearInput).then(closeForm);

		function clearInput() {
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		}

		function closeForm() {
			setTimeout(() => {
				lay.style.display = '';
				document.body.style.overflow = '';
			}, 2000);
		}

		function messLoad() {
			statusMessage.innerHTML = message.loading;
			console.log(message.loading);
		}

		function messFail() {
			statusMessage.innerHTML = message.failure;
		}

		function messSuc() {
			statusMessage.innerHTML = message.success;
		}



	});
// slider
	let slideIndex = 0,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotwrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');

	function showSlide(a) {
		slides.forEach((item) => item.style.display = 'none');
		dots.forEach((item) => item.classList.remove('dot-active'));
		slides[a].style.display = '';
		dots[a].classList.add('dot-active');
	}
	showSlide(slideIndex);
	prev.addEventListener('click', () => {
		slideIndex--;
		if (slideIndex < 0) {
			slideIndex = slides.length - 1;
		}
		showSlide(slideIndex);
	});

	next.addEventListener('click', () => {
		slideIndex++;
		if (slideIndex > slides.length - 1) {
			slideIndex = 0;
		}
		showSlide(slideIndex);
	});

	dots.forEach(function (elem, i) {
		elem.addEventListener('click', () => showSlide(i));
	});

	function timeSlider(){
		let slideIndex = 0,
			wrapp = document.querySelector('.wrap');
		let b=setInterval(function(){
			slideIndex++;
			if (slideIndex > slides.length - 1) {
				slideIndex = 0;
			}
			wrapp.addEventListener('mouseover',function(slideIndex){
				clearInterval(b);
			});
			wrapp.addEventListener('mouseout',function(){
				showSlide(slideIndex);
				setInterval(b);
			});

			
			showSlide(slideIndex);
		},3000);

		
	}
	
	timeSlider();
	



	// Calculater <<<<<<<<<<<<<

	let quantityPeople = document.querySelectorAll('.counter-block-input')[0],
		quantityDay = document.querySelectorAll('.counter-block-input')[1],
		place = document.querySelector('select'),
		totalValue = document.getElementById('total'),
		peopleNum = 0,
		dayNum= 0,
		totalNum=0,
		placeNum=1;
		totalValue.textContent = totalNum;

		quantityPeople.addEventListener('input',function(){
			peopleNum = +this.value;
				calcSum();
		});
		quantityDay.addEventListener('input',function(){
			dayNum = +this.value;
				calcSum();
		});
		function calcSum(){
			totalNum = (peopleNum+dayNum)*4000*placeNum;
			if ((quantityPeople.value && quantityDay.value)){
				totalValue.textContent = totalNum;
			}else{
				totalValue.textContent= 0;
			}
		}
		place.addEventListener('change',function(event){
			if(event.target && event.target.getElementsByTagName('option')){
				placeNum = event.target.value;
				calcSum();
			}
		});
		
	let a = 2;
	window.localStorage.setItem('number',a);		
	console.dir(window.localStorage);






});