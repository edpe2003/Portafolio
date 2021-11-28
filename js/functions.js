let icono_navbar = document.getElementById("navbar");
let navbar = document.querySelector(".elemento-navbar");
let contador = 0;
navbar.style.display = "none";
icono_navbar.addEventListener("click", () => {
    if (contador % 2 != 0) {
        navbar.style.display = "none";
        icono_navbar.style.display = "block";
    } else {
        navbar.style.display = "block";
    }

    contador++;
})