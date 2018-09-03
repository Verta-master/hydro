//Slider
var breakpoint = window.matchMedia('(min-width: 1000px)');
var newsSwiper;
var breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (newsSwiper !== undefined) newsSwiper.destroy(true, true);
    return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
};

var enableSwiper = function() {
  newsSwiper = new Swiper ('.clients__slider', {
    navigation: {
      nextEl: '.clients__next',
      prevEl: '.clients__prev',
    },
    simulateTouch: false,
    preventClicks: false,
    preventClicksPropagation: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
  });
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
