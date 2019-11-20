$(document).ready(function(){

	function validateForm(item){
		$(item).validate({
			rules: {
				name: {
					required: true
					// minlength: 10,
					// maxlength:15
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
					name: {
						required: "Введите свое имя",
						minlength: jQuery.validator.format("Введите больше {0} символов")
					},
					phone:{
						required: "Введите свой номер",
						phone:"не верно введен номер",
						
						
					},
					email: {
					required: "Введите свой email",
					email: "Не верно введен адрес почты"
				}
			}
		});
	};
	validateForm('#order form');
	validateForm('#consultation-form');
	validateForm('#consultate form');
});
