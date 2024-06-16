// //////////////////////////////////////////// NavLinks Burger

const navLinks = document.querySelector(".nav_links");
const containerBtnBurger = document.querySelector(".container_button");
const liMenuToggle = document.querySelectorAll(".nav_presta > li");

const spanPrestaSymbol = document.querySelector(".nav_presta > span");

function toggleMenuBurger() {
    containerBtnBurger.classList.toggle("anim-active");
    navLinks.classList.toggle("nav_links_burger_open");
}

function prestaMenuToggle() {
    liMenuToggle.forEach(li => {
        if (li.style.display === "none" || li.style.display === "") {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    });

    spanPrestaSymbol.classList.toggle('open');
}