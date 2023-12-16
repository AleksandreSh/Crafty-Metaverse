// import Swiper, { Navigation } from 'swiper';
import Swiper from 'swiper/bundle';
// import Swiper from 'swiper';
document.addEventListener('DOMContentLoaded', function () {
  let swiperAbout = new Swiper('.swiper-container-1', {
    loop: false,
    autoHeight: true,
    spaceBetween: 0,
    centeredSlides: false,
    speed: 500,
    mousewheel: {
      invert: 0
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      direction: 'horizontal'
    },
    on: {
      init: function () {
        updateCapter(0);
      },
      slideChange: function () {
        let activeIndex = this.activeIndex;

        updateCapter(activeIndex);
      }
    }
  });

  function updateCapter(index) {
    let capterSlides = document.querySelectorAll('.container__capter .capter-slide');

    capterSlides.forEach(function (slide) {
      slide.style.display = 'none';
    });
    capterSlides[index].style.display = 'block';
  }
});

const element = document.querySelector('.media__swiper');
function checkScreenWidth() {
  if (window.innerWidth < 767) {
    element.classList.add('swiper');
  } else {
    element.classList.remove('swiper');
  }
}

checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);

const swiperMedia = new Swiper('.swiper', {
  direction: 'horizontal',
  autoHeight: true,
  slidesPerView: 'auto',

  loop: false
});

var swiper1 = new Swiper('#swiper1', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 500
  },
  speed: 1000,
  effect: 'slide',
  loop: true
});

var swiper2 = new Swiper('#swiper2', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000
  },
  loop: true
});
