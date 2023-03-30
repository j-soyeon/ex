
$('.btns li').click(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  var con = $(this).attr('data-alt');
  $('.tabs .tab_con').removeClass('active');
  $('#' + con).addClass('active').siblings().removeClass('active');
  return false;
});

$('.sub_btn li').click(function () {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  var subCon = $(this).attr('data-txt');
  $('.sub_tab .sub_con').removeClass('active');
  $('#' + subCon).addClass('active').siblings().removeClass('active');
  return false;
});


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ배경
particlesJS("particles-js", {"particles":{"number":{"value":212,"density":{"enable":true,"value_area":3928.359549120531}},"color":{"value":"#a1b5a7"},"shape":{"type":"polygon","stroke":{"width":3,"color":"#ffffff"},"polygon":{"nb_sides":9},"image":{"src":"img/github.svg","width":20,"height":20}},"opacity":{"value":0.0561194221302933,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":92.19619349976756,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":657.3989449548644,"color":"#ffffff","opacity":0.24852886943415603,"width":17.156509051261096},"move":{"enable":true,"speed":2,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":3928.359549120531,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;