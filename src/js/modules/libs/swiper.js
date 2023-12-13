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
