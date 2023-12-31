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

  const firstItem = infoItems[0];
  const firstBtn = firstItem.querySelector('.info__btn');
  const firstTextContainer = firstItem.querySelector('.info__text');

  firstBtn.classList.add('_active');
  firstTextContainer.style.maxHeight = firstTextContainer.scrollHeight + 'px';

  infoItems.forEach(function (item) {
    const btn = item.querySelector('.info__btn');
    const textContainer = item.querySelector('.info__text');

    btn.addEventListener('click', function () {
      const isActive = btn.classList.contains('_active');

      infoItems.forEach(function (otherItem) {
        const otherBtn = otherItem.querySelector('.info__btn');
        const otherTextContainer = otherItem.querySelector('.info__text');

        otherBtn.classList.remove('_active');
        otherTextContainer.style.maxHeight = 0;
      });

      if (!isActive) {
        textContainer.style.maxHeight = textContainer.scrollHeight + 'px';
        btn.classList.add('_active');
      }
    });
  });
});
