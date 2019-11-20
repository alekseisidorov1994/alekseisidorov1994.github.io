window.addEventListener('DOMContentLoaded',function(){
// Slider<<<<<<<<<<
	function slider(wrapSlider,sliderItem,btnPrev,btnNext,numSlider,itemPictures,classActive){
		slider	= document.querySelector(wrapSlider)
		sliderItem = document.querySelectorAll(sliderItem),
		btnPrev = document.getElementById(btnPrev),
		btnNext = document.getElementById(btnNext);

		function slideHide(num){
			for(let i=0;i<sliderItem.length;i++){
				sliderItem[i].style.display='none';
				}
			sliderItem[num].style.display='block';
		}
		slideHide(numSlider);

		btnNext.addEventListener('click',function(){
			numSlider++;
			if(numSlider!=sliderItem.length){
				slideHide(numSlider);
			}else{
				numSlider=0;
				slideHide(numSlider);
			}
		});
		btnPrev.addEventListener('click',function(){
			numSlider--;
			if(numSlider>=0){
				slideHide(numSlider);
			}else{
				numSlider=sliderItem.length-1;
				slideHide(numSlider);
			}
		});

		
		


// end main part of slider
		
		function inSliderAppeir(i=0){
			if(i>0){
				i=i-1;
			}
			let box = document.querySelectorAll('.box');
			box.forEach(function(item){
				item.innerHTML='';
			});
			let pictures = sliderItem[numSlider].querySelectorAll(itemPictures);
			let clonePic=pictures[i].cloneNode(true);
			clonePic.classList.add(classActive)
			box[numSlider].appendChild(clonePic);
		}

		function changePicture(){
			let pictures = sliderItem[numSlider].querySelectorAll(itemPictures);
			pictures.forEach(function(item,i){
				console.log(i);
				item.addEventListener('click',function(event){
					pictures.forEach(elem=> elem.classList.remove(classActive));
					console.dir(event.target);
					
					console.log(i);
					inSliderAppeir(i);
				});
			});
		}
		inSliderAppeir();
		changePicture();

		btnNext.addEventListener('click',function(){
			inSliderAppeir();
			changePicture();
		});
		btnPrev.addEventListener('click',function(){
			inSliderAppeir();
			changePicture();
		});

		




		
	}
		

	slider('.review__filling','.review__slider','btn_prev','btn_next',2,'.photorama__item','photorama__item_active')




});