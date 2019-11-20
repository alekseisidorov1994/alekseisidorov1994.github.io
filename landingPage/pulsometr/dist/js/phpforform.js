$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type:"POST",
            url:"mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('.#consoltate, #order').fadeOut();
            $('.overlay,#thanks').fadeIn();

            $('form').trigger('reset')
        });
        return false;
    });


});