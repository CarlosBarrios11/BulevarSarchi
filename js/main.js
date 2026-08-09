//Menú hamburguesa

(function() {
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');


function abrirMenu() {

    //1. Abre el menú lateral
    nav.classList.add('visible');
    //2. Crea una máscara por detrás del nav
    overlay.classList.add('active');
    //3. Restringe el scroll
    document.body.classList.add("bodyNoScroll")
    
}

function cerrarMenu() {
    nav.classList.remove('visible');
    overlay.classList.remove('active');
    document.body.classList.remove("bodyNoScroll")
}


// Función para confirmar si el click fue dentro del contenedor del nav
function manejarClickOverlay(e) {
    if (e.target === overlay) {
        cerrarMenu();
    }
}


//Llamado de funciones
cerrar.addEventListener('click', cerrarMenu);
abrir.addEventListener('click', abrirMenu);
overlay.addEventListener('click', cerrarMenu);


})();


//Carrusel
//Constantes
(function() {
const carrusel = document.getElementById("carrusel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicators = document.getElementById("indicators");


//Variable de control
let currentIndex = 0;

const items = document.querySelectorAll(".carruselItem");
const totalItems = items.length;

for(let i = 0; i < totalItems; i++) {
    const dot = document.createElement("div");
    dot.classList.add("indicator");
    if(i==0) dot.classList.add("active")
    dot.addEventListener("click", () => goToSlide(i));
    indicators.appendChild(dot);
}

function updateIndicators() {
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
        indicator.classList.toggle("active", index == currentIndex)
    })
}

function goToSlide(index) {
    currentIndex = index
carrusel.style.transform = `translateX(-${currentIndex * 100}%)` 
updateIndicators()
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems
    goToSlide(currentIndex)
}

function prevSlide() {
    /*Va ir a la última si estoy en la primera slide*/
    currentIndex = (currentIndex - 1 + totalItems) % totalItems
    goToSlide(currentIndex)
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);


// Asigna la misma imagen como fondo borroso de cada ítem del carrusel
document.querySelectorAll(".carruselItem").forEach(item => {
    const img = item.querySelector("img");
    const fondo = item.querySelector(".fondoBorroso");
    if (img && fondo) {
        fondo.style.backgroundImage = `url(${img.src})`;
    }
});




})();

