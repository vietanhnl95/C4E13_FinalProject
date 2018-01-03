/** smooth scroll function */
function scroll() {
  $(document).on('click', 'a[href^="#search-area"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  $(document).on('click', 'a[href^="#result-area"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
}

$(document).ready(scroll);
