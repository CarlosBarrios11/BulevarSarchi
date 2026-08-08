//Menú hamburguesa
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