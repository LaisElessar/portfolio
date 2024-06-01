var mobileMenuIcon = document.querySelector(".botao");
var mobileMenu = document.querySelector('.site_nav_toggle');

mobileMenuIcon.onclick = function(){  
  if(!mobileMenu.classList.contains('ativo')){
    mobileMenu.classList.add('ativo')
  
  }else{
    mobileMenu.classList.remove('ativo')
  }
}