(function() {
  var slides = document.querySelectorAll('.slides__item');
  var slidesNav = document.querySelectorAll('.slides__navigation__item');
  var count = 0, current = count;
  console.log(slidesNav);

  var slider = setInterval(function() {

    slides[count].classList.toggle('active');
    slidesNav[count].classList.toggle('current');
    if(count === slides.length - 1) {
      count = -1;
    }
    slides[++count].classList.toggle('active');
    slidesNav[count].classList.toggle('current');

  }, 2000);
})();

(function() {
  var menuBtn = document.querySelector('.menu-btn'),
      nav = document.querySelector('nav'),
      navLink = document.querySelectorAll('.nav-link');
  menuBtn.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('clicked');
    nav.classList.toggle('shown');
  });

  for(var i = 0; i < navLink.length; ++i) {
    navLink[i].addEventListener('click', function(i) {
      console.log('navlink clicked');
      nav.classList.remove('shown');
    });
  }



})();
