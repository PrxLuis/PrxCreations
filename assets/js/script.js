const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = function() {
  if(window.innerWidth < 1024) {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
  }
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
    if(window.innerWidth < 1024) {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    }
}
navLink.forEach((item) => item.addEventListener("click", linkAction));

/* Audio de fondo */
// Obtén una referencia al elemento de audio, al botón y al icono dentro del botón
const audio = document.getElementById('mi-audio');
const playButton = document.getElementById('play-button');
const icon = playButton.querySelector('ion-icon');

// Agrega un evento clic al botón
playButton.addEventListener('click', function () {
    // Verifica si el audio está pausado
    if (audio.paused) {
        // Si está pausado, reproduce el audio
        audio.play();
        icon.setAttribute('name', 'pause'); // Cambia el ícono a pausa
    } else {
        // Si ya se está reproduciendo, pausa el audio
        audio.pause();
        icon.setAttribute('name', 'play'); // Cambia el ícono a reproducción
    }
});

/* CountDown */
// Define la fecha futura (año, mes, día, hora, minuto, segundo)
const fechaFutura = new Date(2023, 8, 18, 19, 30, 0);
const intervalo = setInterval(actualizarContador, 1000);

function actualizarContador() {
    const fechaActual = new Date();
    const diferencia = Math.floor((fechaFutura - fechaActual) / 1000);
    if (diferencia <= 0) {
        clearInterval(intervalo);
        const segundos = diferencia % 60;
        document.getElementById("segundos").textContent = segundos;
        //document.getElementById("contador").textContent = "La fecha futura ha llegado.";
    } else {
        const dias = Math.floor(diferencia / (60 * 60 * 24));
        const horas = Math.floor((diferencia % (60 * 60 * 24)) / (60 * 60));
        const minutos = Math.floor((diferencia % (60 * 60)) / 60);
        const segundos = diferencia % 60;

        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
        document.getElementById("segundos").textContent = segundos;
    }
}
actualizarContador();

/* Swipper */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
});

/* SCROLL UP */
function scrollUp(){
    const scrollUp = document.getElementById("scroll-up");
    if(this.scrollY>=70) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp)

/* Scroll Reveal */
ScrollReveal().reveal('.sr-bottom', { distance: '50px', origin: 'bottom', duration: 2000})
ScrollReveal().reveal('.sr-top', { distance: '50px', origin: 'top', duration: 2000})
ScrollReveal().reveal('.sr-left', { distance: '50px', origin: 'left', duration: 2000})
ScrollReveal().reveal('.sr-right', { distance: '50px', origin: 'right', duration: 2000})
ScrollReveal().reveal('.widget', { interval: 350 });
ScrollReveal().reveal('.widget-wait', { interval: 450 });
ScrollReveal().reveal('.widget-itinerario', { interval: 450 });
ScrollReveal().reveal('.widget-mesaRegalo', { interval: 450 });
ScrollReveal().reveal('.sr-just', { interval: 350})