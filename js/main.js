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
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}
// mobil select
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


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

