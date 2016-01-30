$('.testimonials blockquote:eq(0)').show();
setTimeout('changeQuote(0)', 5000);
function changeQuote(quoteNum) {
	$('.testimonials blockquote:eq('+quoteNum+')').fadeOut('slow', function() {
		quoteNum++;
		if(!$('.testimonials blockquote:eq('+quoteNum+')').get(0)) {
			quoteNum = 0;
		}
		$('.testimonials blockquote:eq('+quoteNum+')').fadeIn();
		setTimeout('changeQuote('+quoteNum+')', 5000);	
	});	
}
