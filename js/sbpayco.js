var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

$(".material-symbols-outlined").click(function() {
  $(".gnb").toggleClass("on");
  $(this).text(function(e, text) {
      return text === 'close' ? 'menu' : 'close'
  });
});