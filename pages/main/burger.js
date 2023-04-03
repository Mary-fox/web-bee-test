const btnBurger = document.querySelector('.mobile__arrow');
const burger = document.querySelector('.nav__burger');
// const blackLayer = document.querySelector('.black-layer')
const closeBtn = document.querySelector(".nav__burger_close");

btnBurger.addEventListener('click', () => {
    burger.classList.add('nav__burger_active');

})
closeBtn.addEventListener('click', () => {
    burger.classList.remove('nav__burger_active');

})

