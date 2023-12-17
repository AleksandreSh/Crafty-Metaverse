function burger() {
  const iconMenu = document.querySelector('.menu__icon');
  const menuBody = document.querySelector('.menu__body');
  const headerLogo = document.querySelector('.header__logo');
  if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      headerLogo.classList.toggle('_active');
    });
  }
  let menuLinks = document.querySelectorAll('.menu__link');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
      headerLogo.classList.remove('_active');
    });
  });
}
burger();

document.addEventListener('DOMContentLoaded', function () {
  const infoItems = document.querySelectorAll('.info__item');

  infoItems.forEach(function (item) {
    const btn = item.querySelector('.info__btn');
    const textContainer = item.querySelector('.info__text');

    btn.addEventListener('click', function () {
      infoItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          const otherBtn = otherItem.querySelector('.info__btn');
          const otherTextContainer = otherItem.querySelector('.info__text');

          otherBtn.classList.remove('_active');
          otherTextContainer.classList.remove('_active');
        }
      });
      textContainer.classList.toggle('_active');
      btn.classList.toggle('_active');
    });
  });
});

function hideLogo() {
  let logo = document.getElementById('logo');
  let hiddenLogo = document.getElementById('hiddenLogo');
  logo.classList.add('hidden');
  hiddenLogo.classList.remove('hidden');
}
