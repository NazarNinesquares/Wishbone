$('.header__burger').on('click', function () {
	$(this).toggleClass('active');
	$('.menu').toggleClass('active');
	$('body').toggleClass('lock');
})
