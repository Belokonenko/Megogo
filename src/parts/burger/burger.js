export default function burger() {
    const btnBurger = document.querySelector(".header__btn-burger");
    const nav = document.querySelector('.nav-list');

    
    btnBurger.addEventListener("click", () => {
        btnBurger.classList.toggle("header__btn-burger--active");
        nav.classList.toggle('nav-list--active');
    });
    
    nav.addEventListener('click', () => {
        nav.classList.remove('nav-list--active');
        btnBurger.classList.remove("header__btn-burger--active");
    })

    nav.addEventListener('mouseleave', () => {
        nav.classList.remove('nav-list--active');
        btnBurger.classList.remove("header__btn-burger--active");
    })
}


