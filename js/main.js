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

//scroll effect
document.querySelectorAll('.ancor').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});