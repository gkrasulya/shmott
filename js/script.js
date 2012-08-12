/* Author: Georgy Krasulya

*/


(function() {
	var $b = $('body');

	if ($().placeholder) {
		$('input[placeholder], textarea[placeholder]').placeholder();
	}

	$('#faqList .js-turner').click(function() {
		$(this).parent().toggleClass('opened');

		return false;
	});

	$('#faqList .js-close').click(function() {
		$(this).parent().parent().removeClass('opened');

		return false;
	});

	if ($().mCustomScrollbar) {
		$('.js-custom-scrollbar').mCustomScrollbar();
	}

	var $allDropdowns = $();
	$('.js-dropdown').each(function(i, el) {
		$allDropdowns = $allDropdowns.add($(el));
		$(el).on('click', '.js-dropdown-turner', function() {
			if (! $(el).hasClass('opened')) {
				$allDropdowns.removeClass('opened');
			}
			$(el).toggleClass('opened');
			return false;
		});
	});

	var
	$contactsFormEmailInput = $('#contactsFormEmailInput'),
	$contactsFormPhoneInput = $('#contactsFormPhoneInput'),
	$contactsPhoneIcon = $('#contactsPhoneIcon'),
	$contactsEmailIcon = $('#contactsEmailIcon');

	$contactsFormEmailInput.on('change', function() {
		if ($(this).val().trim() == '') {
			$contactsEmailIcon.hide();
		} else {
			$contactsEmailIcon.show();
		}
	});

	$contactsFormPhoneInput.on('change', function() {
		if ($(this).val().trim() == '') {
			$contactsPhoneIcon.hide();
		} else {
			$contactsPhoneIcon.show();
		}
	});

	$('.js-tabs-wrap').each(function(i, el) {
		var
		$links = $(el).find('.js-tabs-links-wrap a'),
		$tabs = $(el).find('.js-tabs-tab');

		$links.eq(0).addClass('selected');
		$tabs.eq(0).show();

		$links.each(function(i, link) {
			$(link).on('click', function() {
				$links.removeClass('selected');
				$tabs.hide();

				$(link).addClass('selected');
				$tabs.eq(i).show();

				return false;
			});
		});
	});
})();