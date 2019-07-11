$(document).ready(function () {
 $('#searchBtn').on('click',function () {
    $('.formContainer').toggleClass('openForm');
 });
});
$(document).ready(function () {
  $('.mobilKapat').on('click',function () {
    $('.mobilMenuContainer').slideUp(500);
    $('body').css('overflow','auto');



  });
  $('.mobilMenu button').on('click',function () {
    $('.mobilMenuContainer').slideDown(500);
    $('.mobilMenuContainer').css({
      'display': 'flex',

    });

    $('body').css('overflow','hidden');
  })

})
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
});
$('.userSlider').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  responsiveClass:true,
  responsive:{
    0:{
      items:2,
      nav:true
    },
    600:{
      items:4,
      nav:false
    },
    1000:{
      items:6,
      nav:false,
      loop:true
    }
  }
});



//
// // init currency loader with the api address
// // that fetches xml data from http://www.tcmb.gov.tr/kurlar/today.xml
// load_tcmb_currencies('/examples/api/tcmb_currency.php');
// // since AUD is not added by default
// var currencies = {'USD':'$','EUR':'€','GBP':'£','AUD':'$'};
// // ask to load currencies into the given element by a selector
// load_exchange_table('#exchange',currencies);
// // since AUD is not added by default
// var currencies = ['USD','EUR','GBP','AUD'];
//
// // ask to load currencies into the given element by a selector
// load_converter_form('#converter',currencies);

