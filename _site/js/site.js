// Register the service worker if available.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}

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
