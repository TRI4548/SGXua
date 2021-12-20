$(document).ready(function () {
  var offset = 250;
  var duration = 500;

  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $(".scroll-to-top").fadeIn(duration);
    } else {
      $(".scroll-to-top").fadeOut(duration);
    }
  });
});
