/* Seleccionar elementos */
const selectElement = (selector) => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Algo salio mal, asegurese de que ${selector} existe 
    o que esta tipeado correctamente.`);
};

/* Agregar estilo 'activated' al nav */
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15) {
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader);

/* Menu tipo hamburger */
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);

/* Abrir y cerrar el search form */
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));

/* Cerrar el search form con la tecla Escape */
window.addEventListener('keyup', event => {
    if(event.key === 'Escape') {
        searchFormContainer.classList.remove('activated')
    }
});

/* Cambiar tema / agregar a local storage */
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if(currentTheme) {
    bodyElement.classList.add('light-theme');
};

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if(bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    }
});

/* Swiper JS */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

/* Validación formulario JS */
const email = document.getElementById('mail')

email.addEventListener('input', () => {
  if (email.validity.typeMismatch){
    email.setCustomValidity('Please enter a valid email address.');
  }else{
    event.preventDefault()
    email.setCustomValidity('Successfully subscribed!');
  }
});