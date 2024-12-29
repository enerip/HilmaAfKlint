
$(document).ready(function () {
  AOS.init();
});

// CARRUSEL IMAGENES

$('.responsive').slick({
  arrows: false,
    dots: false,
    infinite: true,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

// ANIMACION CARGA AÑOS

var contador = 0;

function carga() {
    if (contador <= 1907) {
        document.querySelector(".año").textContent = contador;
        contador += 10;
        setTimeout(carga, 10); 
    } else {
        document.querySelector(".año").textContent = "1907";
    }
}

window.onload = function () {
    carga();
};