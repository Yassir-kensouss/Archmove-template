

/*-----------------------Product swiper--------------------*/

var swiper = new Swiper('.product-slider', {
  slidesPerView: 3,
      spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*--------------------Testimonial swiper------------------*/

var swiper = new Swiper('.testimonials-slider', {
  slidesPerView: 1,
      spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*--------------------Add smooth scrolling------------------*/
var Scrollbar = window.Scrollbar;

Scrollbar.init(document.querySelector('#my-scrollbar'));



/*---------------------small screen navbar-------------------*/

const menu_btn = document.getElementById("menu-btn");
const lines = document.querySelectorAll(".line-bg");
const navbar_wrapper = document.querySelector(".hidden-nav-wrapper");

let showMenu = false;

menu_btn.addEventListener("click",function(){
  
  if(!showMenu)
  {
    navbar_wrapper.style.left = "0";

    // Set menu state
    showMenu = true;

    // set humberger lines bg to white
    for(let i=0;i<lines.length;i++)
    {
      lines[i].style.backgroundColor = "#fff";
    }
    
  }else{   
    navbar_wrapper.style.left = "100%";
    // Set menu state
    showMenu = false;

    // set humberger lines bg to black
    for(let i=0;i<lines.length;i++)
    {
      lines[i].style.backgroundColor = "#000";
    }

  }

});