// hamburger menu
var mobileMenuIcon = document.querySelector(".button");
var mobileMenu = document.querySelector('.site_nav_toggle');

mobileMenuIcon.onclick = function(){  
  if(!mobileMenu.classList.contains('active')){
    mobileMenu.classList.add('active')
  
  }else{
    mobileMenu.classList.remove('active')
  }
}

$('.slider').slick({
  speed: 3000,            
  autoplay: true,
  autoplaySpeed: 0,       
  cssEase: 'linear',      
  slidesToShow: 3,        
  slidesToScroll: 1,
  infinite: true,         
  arrows: false,          
  dots: false,            
  variableWidth: true     
});

const backToTopButton = document.getElementById('backToTop');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
	};

backToTopButton.onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// project filter

$('.filter-btn').on('click', function(){
  let type = $(this).attr('id');
  let boxes = $('.card');

  $('.main-btn').removeClass('active');
  $(this).addClass('active');

  if(type == 'dev-btn'){
    eachBoxes('dev', boxes);
  }else if(type == 'ux-btn'){
    eachBoxes('ux', boxes);
  }else if(type == 'ui-btn'){
    eachBoxes('ui', boxes);
  }else{
    eachBoxes('all', boxes);
  }
});

function eachBoxes(type, boxes){
  if(type == 'all'){
    $(boxes).fadeIn();
  }else{
    $(boxes).each(function(){
      if(!$(this).hasClass(type)){
        $(this).fadeOut('slow');
      }else{
        $(this).fadeIn();
      }
    });
  }
}

window.onscroll = function() {
  const header = document.querySelector(".header");
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

//noise effect

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.querySelector(".background").appendChild(canvas);

const imageData = ctx.createImageData(canvas.width, canvas.height);

for (let i = 0; i < imageData.data.length; i += 4) {
    const value = Math.random() > 0.3 ? 255 : 0;
    imageData.data[i] = value;
    imageData.data[i + 1] = value;
    imageData.data[i + 2] = value;
    imageData.data[i + 3] = 12;
}

ctx.putImageData(imageData, 0, 0);