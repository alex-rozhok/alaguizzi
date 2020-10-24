// preload
window.onload=function(){
    let preload = document.querySelector('.preload');
    preload.style.display="none";
      document.documentElement.classList.remove('preload-hidden');
  }
// End preload

// slider
if(document.querySelectorAll('.slider').length>0) {
        $('.slider').slick({
            slidesToShow: 1,
            adaptiveHeight: true
        });
    };

// show menu
let menu = document.querySelector('.menu');
let menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.classList.toggle('show-menu');
    
    (menuToggle.classList.contains('menu-toggle-active')) ? menuToggle.classList.remove('menu-toggle-active') : menuToggle.classList.add('menu-toggle-active');
})

// hidden menu
document.addEventListener('click', function(e) {
    let target = e.target;
  
    let menu_is_active = menu.classList.contains('show-menu');
    if (menu_is_active && !target.closest('.menu') ) {
        menu.classList.remove('show-menu');
        menuToggle.classList.remove('menu-toggle-active')
    }
});
// END menu
