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

    console.log(count);
  }, 3000);
})();
