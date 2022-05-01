const elHeader = document.querySelector('.site-header')
const elNavToggler =elHeader.querySelector('.js-nav-toggler')

elHeaderBtn.addEventListener('click', () => {
    elHeaderNav.classList.toggle('site-nav--open')
    elHeaderB.classList.toggle('nav-toggler--open')
  })