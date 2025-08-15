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
