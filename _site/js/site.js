/* global $ */
// Register the service worker if available.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (reg) {
    // console.log('Successfully registered service worker', reg);
  }).catch(function (err) {
    console.warn('Error whilst registering service worker', err)
  })
}

function changeQuote (quoteNum) {
  $('.testimonials blockquote:eq(' + quoteNum + ')').fadeOut('fast', function () {
    quoteNum++
    if (!$('.testimonials blockquote:eq(' + quoteNum + ')').get(0)) {
      quoteNum = 0
    }
    $('.testimonials blockquote:eq(' + quoteNum + ')').fadeIn()
    setTimeout(function () { changeQuote(quoteNum) }, 5000)
  })
}

if ($('.testimonials blockquote').get(0)) {
  $('.testimonials blockquote:eq(0)').show()
  setTimeout(function () { changeQuote(0) }, 5000)
}
