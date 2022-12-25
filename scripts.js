const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

   });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('projects-show');
        }
   });
});

const hiddenElements2 = document.querySelectorAll('.projects-hidden');
hiddenElements2.forEach((el) => observer2.observe(el));

const mobile_nav = document.querySelector('.mobile-icon');
const nav_header = document.querySelector('.header');
const something = document.querySelectorAll('.nav-icon')

const toggleNavbar = () => {
    nav_header.classList.toggle('active');
};

mobile_nav.addEventListener("click",() => toggleNavbar());
something.forEach((el) => el.addEventListener("click",() => toggleNavbar()));
