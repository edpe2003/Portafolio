let icono_navbar = document.getElementById("navbar");
let navbar = document.querySelector(".elemento-navbar");
let navbar_button = document.querySelectorAll(".navbar-button");
let contador = 0;
navbar.style.display = "none";
icono_navbar.addEventListener("click", () => {
    if (contador % 2 != 0) {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }

    contador++;
})
navbar_button.forEach(element => {
    element.addEventListener("click", () => {
        navbar.style.display = "none";
    });
});