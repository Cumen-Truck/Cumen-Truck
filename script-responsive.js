// Detectar si el dispositivo es móvil y cargar la hoja de estilo adecuada
document.addEventListener("DOMContentLoaded", () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    //const link = document.createElement("link");
    const link = document.getElementById('stylePage');
    //const fondoHero = document.querySelector('#fondoHero');
    const logo = document.querySelector('#Logo');
    link.rel = "stylesheet";

    if (isMobile) {
        link.href = "styles-mobile.css"; // Hoja de estilos específica para móviles
        logo.removeAttribute('src');
        logo.src = 'Imagenes/logo-transparente-266x100.avif';
        //fondoHero.removeAttribute("src");
        //fondoHero.src = 'Imagenes/fondo-hero.webp';
        //fondoHero.style.background = 'url("Imagenes/fondo-hero.webp")';
    } else {
        link.href = "styles.css"; // Hoja de estilos específica para escritorios
        logo.removeAttribute('src');
        logo.src = 'Imagenes/logo-transparente.avif';
        //fondoHero.removeAttribute("src");
        //fondoHero.src = 'Imagenes/fondo-hero.webp';
        //fondoHero.src = 'Imagenes/fondo-transparente.webp';
        //fondoHero.style.background = 'url("Imagenes/fondo.webp")';
    }

    document.head.appendChild(link);
});
