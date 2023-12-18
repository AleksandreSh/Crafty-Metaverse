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

  const element = document.querySelector('.media__swiper');
  let swiperMedia;

  function checkScreenSize() {
    if (window.innerWidth < 767) {
      element.classList.add('swiper');
      if (!swiperMedia) {
        swiperMedia = new Swiper('.swiper', {
          direction: 'horizontal',
          autoHeight: true,
          slidesPerView: 'auto',
          loop: false
        });
      }
    } else {
      element.classList.remove('swiper');
      if (swiperMedia) {
        swiperMedia.destroy();
        swiperMedia = undefined;
      }
    }
  }

  function checkOrientation() {
    if (window.matchMedia('(orientation: portrait)').matches) {
    } else {
    }
  }

  checkScreenSize();
  checkOrientation();

  window.addEventListener('resize', () => {
    checkScreenSize();
    checkOrientation();
  });

  window.addEventListener('orientationchange', () => {
    checkScreenSize();
    checkOrientation();
  });

  // const element = document.querySelector('.media__swiper');
  // function checkScreenWidth() {
  //   if (window.innerWidth < 767) {
  //     element.classList.add('swiper');
  //   } else {
  //     element.classList.remove('swiper');
  //   }
  // }

  // checkScreenWidth();
  // window.addEventListener('resize', checkScreenWidth);

  // const swiperMedia = new Swiper('.swiper', {
  //   direction: 'horizontal',
  //   autoHeight: true,
  //   slidesPerView: 'auto',

  //   loop: false
  // });

  let swiper1 = new Swiper('#swiper1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000
    }

    // loop: true
  });

  let swiper2 = new Swiper('#swiper2', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000
    },
    loop: true
  });
});
