document.addEventListener('DOMContentLoaded',()=>{
	const  mainMenu = document.getElementById('main-menu'),
			btnScroll = document.querySelector('.scrollUp');
	window.addEventListener('scroll',function(event){
		console.log(window.pageYOffset);
	   let hd = window.pageYOffset,
			hm = 30;
		if(+hd>=hm){
			mainMenu.classList.add('header_active');
		}else{
			mainMenu.classList.remove('header_active');
	   }
	   if(hd>200){
		btnScroll.style.display='block';
		btnScroll.style.opacity=''+(hd/700).toFixed(2);
	   }else{
		btnScroll.style.display='';
	   }

	});

	btnScroll.addEventListener('click',()=>{
		let	i=10;
		const scroling = ()=>{
			if(window.pageYOffset ==0){
				cancelAnimationFrame(scroling);
			}else{
				i+=2;
				scrollBy(0,-i);
				requestAnimationFrame(scroling);
			}
		};
		scroling();
	});

	









});