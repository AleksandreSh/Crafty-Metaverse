function burger() {
  const iconMenu = document.querySelector('.menu__icon');
  const menuBody = document.querySelector('.menu__body');
  if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }
}
burger();

document.addEventListener('DOMContentLoaded', function () {
  const infoItems = document.querySelectorAll('.info__item');

  infoItems.forEach(function (item) {
    const btn = item.querySelector('.info__btn');
    const textContainer = item.querySelector('.info__text');

    btn.addEventListener('click', function () {
      textContainer.classList.toggle('_active');
    });
  });
});
