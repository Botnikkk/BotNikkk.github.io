const mobile_nav = document.querySelector('.mobile-icon');
const nav_header = document.querySelector('.header');
const something = document.querySelectorAll('.nav-icon')

const toggleNavbar = () => {
    nav_header.classList.toggle('active');
};

mobile_nav.addEventListener("click",() => toggleNavbar());
something.forEach((el) => el.addEventListener("click",() => toggleNavbar()));
