$(document).ready(function(){
// 	$('.carousel__inner').slick({
// 		infinite: true,
// 		speed: 400,
// 		prevArrow:'<button type="button" class="slick-prev"><img src="icon/arrow.png"></button>',
// 		nextArrow:'<button type="button" class="slick-next"><img src="icon/arrow-right.png"></button>',
// 		centerMode: true,
// 		variableWidth: true,
// 		responsive:[
// 			{
// 			breakpoint: 1000,
// 			settings:{
// 				dots: true,
// 				arrows: false,
				
// 			}
// 			}

// 		]
/**switch tabs-----------------work on jquery js------------------------------------------------- */
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});
	
	// $('.catalog-item__link').each(function(i){
	// 	$(this).on('click',function(e){
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

	// 	});
	// });
	// $('.catalog-item__back').each(function(i){
	// 	$(this).on('click',function(e){
	// 		e.preventDefault();
	// 		$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
	// 		$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

	// 	});
	// });
	
		function toggleSlide(item) {
			$(item).each(function(i) {
				$(this).on('click',function(e){
					e.preventDefault();
					$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
					$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		
				});
			});

		};
	toggleSlide('.catalog-item__back');
	toggleSlide('.catalog-item__link');
		
});
/**end switch tabs------jquery js end------------------------------------------------------- */
//   });
	
  // // centerMode: true,
		// autoplay: true,
		// autoplaySpeed: 1800 
		// fade: true,
		// cssEase: 'linear'
	// slidesToShow: 2,
		// slidesToScroll: 2
		// dots: true,
		// infinite: true,
		 //   setting-name: setting-value
		 // slidesToShow: 1,

/*------------SLIDER___------------------*/
const slider = tns({
container: '.carousel__inner',
items: 1,
slideBy: 'page',
autoplay: false,
controls: false,
nav: true,
navPosition: 'bottom',
autoplayHoverPause: true,
autoplayButtonOutput: false,
autoplayTimeout:'5000',
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});
/*end SLIDER---------------------------------------------------------------- */


// MODAL window//
$(document).ready(function(){
	$('[data-modal=consultate]').on('click', function(){
		$('.overlay,#consultate').fadeIn('slow');
	});
	$('.modal__close').on('click', function(){
		$('.overlay,#consultate,#order,#thanks').fadeOut('slow');
	});
	
	$('.button_mini').each(function(i){
		$(this).on('click',function(){
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay,#order').fadeIn('fast');

		});

	});


});


