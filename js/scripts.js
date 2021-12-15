$(() => {

	// Скрол к пунктам меню
    $(".scroll").on("click", function(e){
    	e.preventDefault();
    	let id = $(this).attr("href");

    	$("html, body").animate({
	         scrollTop: $(id).offset().top + "px"
	     }, {
	         duration: 1500,
	         easing: "swing"
	    });
    });


	//Гамбургер меню
    $('header .menu_btn').click((e) => {
		e.preventDefault()

		if (!$('header .menu_btn').hasClass('active')) {			
			$('header .menu_btn').addClass('active')
			$('header .menu').addClass('show')	
			$('.overlay').fadeIn(300)	
		} else {		
			$('header .menu_btn').removeClass('active')
			$('header .menu').removeClass('show')
			$('.overlay').fadeOut(300)
		}
	})

	$('.overlay').click((e) => {
		e.preventDefault()
		$('header .menu_btn').removeClass('active')
		$('header .menu').removeClass('show')
		$('.overlay').fadeOut(300)
	})



	
})



