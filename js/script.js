//Mobile menu
$('.menu__up').click(function() {
  $(this).toggleClass('menu__up--down');
  $('.menu__sublist').slideToggle();
});

$('.menu__btn').click(function() {
  $('.menu__wrap').addClass('menu__wrap--show');
});

$('.menu__close').click(function() {
  $('.menu__wrap').removeClass('menu__wrap--show');
});
