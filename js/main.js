$(document).ready(function () {
 $('#searchBtn').on('click',function () {
    $('.formContainer').toggleClass('openForm');
 });
});
// owl slider
$('.mainSlider').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:true
    },
    600:{
      items:1,
      nav:false
    },
    1000:{
      items:1,
      nav:false,
      loop:true
    }
  }
})
