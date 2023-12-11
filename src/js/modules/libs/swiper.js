// import Swiper, { Navigation } from 'swiper';
// import Swiper from 'swiper/bundle';
// import Swiper from 'swiper';
document.addEventListener('DOMContentLoaded', function () {
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
