var mobileMenuIcon = document.querySelector(".button");
var mobileMenu = document.querySelector('.site_nav_toggle');

mobileMenuIcon.onclick = function(){  
  if(!mobileMenu.classList.contains('active')){
    mobileMenu.classList.add('active')
  
  }else{
    mobileMenu.classList.remove('active')
  }
}