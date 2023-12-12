// import Swiper, { Navigation } from 'swiper';
import Swiper from 'swiper/bundle';
// import Swiper from 'swiper';
document.addEventListener('DOMContentLoaded', function () {
  let swiperAbout = new Swiper('.swiper-container-1', {
    loop: 0,
    autoHeight: 0,
    spaceBetween: 0,
    centeredSlides: 0,
    speed: 500,
    mousewheel: {
      invert: 0
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      direction: 'horisontal'
    }
  });
  let swiperAboutCarter = new Swiper('.swiper-container-2', {});
  swiperAbout.controller.control = swiperAboutCarter;
  swiperAboutCarter.controller.control = swiperAbout;

  let swiper1 = new Swiper('#swiper1', {
    slidesPerView: 0.9,
    loop: true,
    spaceBetween: 0,
    navigation: false
  });

  let swiper2 = new Swiper('#swiper2', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 0,
    navigation: false
  });
});
