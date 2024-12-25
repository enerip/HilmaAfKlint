function showImage() {
    var img = document.querySelector('.c-image');
    img.style.visibility = 'visible';
    img.style.opacity = 1;
}

// Función para ocultar la imagen
function hideImage() {
    var img = document.querySelector('.c-image');
    img.style.visibility = 'hidden';
    img.style.opacity = 0;
}

// Inicializa Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});
