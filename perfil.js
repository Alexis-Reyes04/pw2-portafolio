const boton = document.getElementById("modoBtn");

boton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});