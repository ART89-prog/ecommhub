$(() => {
	// Есть ли поддержка тач событий или это apple устройство
	if (!is_touch_device() || !/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) $('html').addClass('custom_scroll')

	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() + 'px')

	
	// Аккордeон
	$(".faq_accordeon dl").click(function() {
		$(this).find("dd").slideToggle();
		$(this).find("dt").toggleClass("active")
	});


    // Табы
	$(function() {
		var tab = $('#tabs .tabs-items > div'); 
		tab.hide().filter(':first').show(); 
		
		// Клики по вкладкам.
		$('#tabs .tabs-nav a').click(function(){
			tab.hide(); 
			tab.filter(this.hash).show(); 
			$('#tabs .tabs-nav a').removeClass('active');
			$(this).addClass('active');
			return false;
		}).filter(':first').click();
	 
		// Клики по якорным ссылкам.
		$('.tabs-target').click(function(){
			$('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
		});
	});

	$('body').on('click', '.modal_link', function (e) {
		e.preventDefault()
		$.fancybox.close(true)
		$.fancybox.open({
			src: $(this).data('content'),
			type: 'inline',
			touch: false
		})
	})


	// Моб. версия
	if ($(window).width() < 360) $('meta[name=viewport]').attr('content', 'width=360, user-scalable=no')




})



$(window).resize(() => {
	// Моб. версия
	$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
	if ($(window).width() < 360) $('meta[name=viewport]').attr('content', 'width=360, user-scalable=no')
})

// Вспомогательные функции
const setHeight = (className) => {
	let maxheight = 0
	className.each(function () {
		const elHeight = $(this).outerHeight()
		if (elHeight > maxheight) maxheight = elHeight
	})
	className.outerHeight(maxheight)
}

const is_touch_device = () => !!('ontouchstart' in window)

const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}