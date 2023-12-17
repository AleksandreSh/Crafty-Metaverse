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
}
burger();

document.addEventListener('DOMContentLoaded', function () {
  const infoItems = document.querySelectorAll('.info__item');

  infoItems.forEach(function (item) {
    const btn = item.querySelector('.info__btn');
    const textContainer = item.querySelector('.info__text');

    btn.addEventListener('click', function () {
      btn.classList.toggle('_active');
      textContainer.classList.toggle('_active');
    });
  });
});
function hideLogo() {
  let logo = document.getElementById('logo');
  let hiddenLogo = document.getElementById('hiddenLogo');
  logo.classList.add('hidden');
  hiddenLogo.classList.remove('hidden');
}
