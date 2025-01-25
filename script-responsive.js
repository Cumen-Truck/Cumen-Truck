async function esMovil2() {
    if (navigator.userAgentData) {
        const datos = await navigator.userAgentData.getHighEntropyValues(["platform"]);
        return datos.platform === "Android" || datos.platform === "Win";
    }
    return esDispositivoMovil(); // Fallback si `userAgentData` no está disponible
}

/* // Detectar si el dispositivo es móvil y cargar la hoja de estilo adecuada
document.addEventListener("DOMContentLoaded", async () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);    
    //const link = document.createElement("link");
    const link = document.getElementById('stylePage');
    //const fondoHero = document.querySelector('#fondoHero');
    const logo = document.querySelector('#Logo');
    const head = document.head;
    link.rel = "stylesheet";    

    //if (isMobile) {
    if (esMovil2()) {
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

    //document.head.appendChild(link);
    head.appendChild(link);
}); */

document.addEventListener("DOMContentLoaded", async () => {
    const head = document.head;
    let link = document.getElementById("stylePage");

    if (!link) {
        link = document.createElement("link");
        link.id = "stylePage";
        link.rel = "stylesheet";
        head.appendChild(link);
    }

    const esMovil = await esMovil2();
    link.href = esMovil ? "styles-mobile.css" : "styles.css";

    // Cambiar el logo
    const logo = document.querySelector("#Logo");
    if (logo) {
        logo.src = esMovil ? "Imagenes/logo-transparente-266x100.avif" : "Imagenes/logo-transparente.avif";
    }
});
