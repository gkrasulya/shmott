/* Author: Georgy Krasulya

*/


(function() {
	$('input[placeholder], textarea[placeholder]');

	$('#faqList .js-turner').click(function() {
		$(this).parent().toggleClass('opened');

		return false;
	});

	$('#faqList .js-close').click(function() {
		$(this).parent().parent().removeClass('opened');

		return false;
	});

	if ($().mCustomScrollbar) {
		$('.js-custom-scrollbar').mCustomScrollbar({

		})
	}
})();