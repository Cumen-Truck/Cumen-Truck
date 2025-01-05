//const imgsocial = document.querySelector('#ImgSocial');
const facebook = document.querySelector('#Facebook');
const instagram = document.querySelector('#Instagram');
const price = document.querySelectorAll('.price');
const page = document.querySelector('#page a');
const metaContent = document.querySelector('meta[name="description"]');
const ContMeta = 'Cumen Truck ofrece una deliciosa variedad de comidas rápidas, incluyendo hamburguesas, tacos y panchos, elaborados con ingredientes frescos y de calidad. Disfruta de opciones como la Hamburguesa de Cordero con cebolla caramelizada y alioli, o el Taco Veggie con verduras salteadas, todo a precios accesibles. ¡El buen sabor te espera en Cumen Truck!';
//definimos constante plataforma
const plataforma = navigator.userAgent;
//definimos la funcion onload
window.onload = function() {
    //cargarImg();
    //if (plataforma.includes('Android')) {
        //creaTop();
    //}
    metaContent.content = ContMeta;
    //console.log(location.href);
    //if (page.textContent == 'Comidas') {
        //page.textContent = 'Bebidas';
        //page.href = 'bebidas.html';
    //} else if (page.textContent == 'Bebidas') {
        //page.textContent = 'Comidas';
        //page.href = 'index.html';
    //} else if (location.href.includes('about') && window.location.pathname.includes('about')) {
        //page.textContent = 'Comidas';
        //page.href = 'index.html';
    //}
};
//document.body.onload = cargarImg;
//Definimos la funcion que agrega los titulos a los componentes
function Titulos() {
    if (instagram.onmouseover) {
        instagram.title = 'Visitar página de Instagram de "Cumen Truck"';
    }
    if (facebook.onmouseover) {
        facebook.title = 'Visitar página de Facebook de "Cumen Truck"';
    }
}
//definimos la funcion para crear un nuevo div por cada item del menu
//para luego crear un nuevo elemento img para colocar el logo con efecto
function cargarImg(){
    var destino = document.querySelectorAll(".menu-item");
    //var destino = elem;
    if (destino == undefined)
        alert("No existe el bloque destino");
    else{
        for (let i = 0; i < destino.length; i++) {
            var nodoDivImg = document.createElement("div");
            nodoDivImg.id = 'nodo-img-item';
            nodoDivImg.className = 'nodo-img-item';
            destino[i].appendChild(nodoDivImg);
        }
        var nodo1 = document.querySelectorAll('#nodo-img-item');
        for (let c = 0; c < nodo1.length; c++) {
            var nodoImg = document.createElement("img");
            nodoImg.setAttribute("src", "Imagenes/logo-transparente.webp");
            nodoImg.id = 'img-item-' + c;
            nodo1[c].appendChild(nodoImg);
        }
    }
}
//definimos la funcion que crea el boton de top para dispositivos moviles
function creaTop(){
    //if (location.href.includes('Menu-Cumen-Truck') || location.href.includes('index') || window.location.pathname.includes('index') || location.href.includes('bebidas') || window.location.pathname.includes('bebidas') || window.location.pathname.includes('Menu-Cumen-Truck'))
    //if (location.href.includes('Menu-Cumen-Truck') && location.href.includes('index') || window.location.pathname.includes('Menu-Cumen-Truck') && window.location.pathname.includes('index') || location.href.includes('bebidas') || window.location.pathname.includes('bebidas'))
    /* if (location.href.includes('index') && window.location.pathname.includes('index') || location.href.includes('bebidas') || window.location.pathname.includes('bebidas'))
        var destino = document.querySelector("main");
    else if (window.location.pathname.includes('about')) {
        destino = document.querySelector(".container");
    } */
    if (window.location.pathname.includes('about')) {
        var destino = document.querySelector(".container");
    } else {
        destino = document.querySelector("main");
    }
    if (destino == undefined)
        alert("No existe el bloque destino");
    else{
        var nodoTop = document.createElement("div");
        nodoTop.className = 'top';
        destino.appendChild(nodoTop);
        var nodo1 = document.querySelector('.top');
        var nodoButton = document.createElement("button");
        nodoButton.id = 'myBtn';
        nodoButton.addEventListener('click' , topFunction);
        nodo1.appendChild(nodoButton);
    }
}
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const hahaha = document.getElementById('jaja');
const todosss = document.querySelectorAll('div:not(.menu-container), header p, .menu-section');
let tiene = '';
//removemos la clase active
todosss.forEach(element => {
//le añadimos el evento "onClick"  a cada elemento
    if (plataforma.includes('Win')) {
        element.addEventListener("click", () => {
            tiene = menu.classList.value;
            if (tiene == 'menu active') {
                //console.log(tiene);
                menu.classList.remove('active');
            } else {
                //console.log('no');
            }
        });
    }
});
//si es windows definimos la funcion click
if (plataforma.includes('Win')) {
    //document.addEventListener('DOMContentLoaded', () => {
    menuToggle.addEventListener('click', () => {
        tiene = menu.classList.value;
        if (tiene === 'menu active') {
            menu.classList.remove('active');
        } else {
            menu.classList.add('active');
        }
    });
    //});
} else if (plataforma.includes('Android')) {
    setTimeout(() => {
        menu.classList.add('active');
        if (['index', 'Cumen-Truck', 'Menu-Cumen-Truck', 'bebidas', 'about'].some(path => window.location.pathname.includes(path))) {
            window.onscroll = function () {
                scrollFunction();
                menuVisible2();
                sisi();                
            };
        }
    }, 500);
}
/* async function hiddde(hg) {
    if (plataforma.includes('Win')) {
        tiene = menu.classList.value;
        console.log(tiene);
        if (hg === 'saltar') {
            tiene = '';
            console.log('hay que saltar');
            return 'no';
        } else {
            console.log(hg);
        //if (menu.classList.contains('active')) {
            if (tiene === 'menu active') {
                if (hg === 'header' && tiene === 'menu active') {
                    console.log(hg);
                    menu.classList.remove('active');
                    tiene = '';
                }
                if (hg.includes('menus') && tiene === 'menu active') {
                    console.log('menu');
                    menu.classList.remove('active');
                }
            } else {
                if (hg.includes('menus')) {
                    menu.classList.toggle('active');
                }
                //menu.classList.add('active');
            }
        }
    } else if (plataforma.includes('Android')) {
        //
    }
} */
let a = '';
let b = '';
let scrolll = '';
const inicios = 85;
const target = 20;
let final = '';
//const TargetHeight = document.documentElement.offsetHeight - screen.height;
const TargetHeight = document.documentElement.offsetHeight - window.innerHeight;
// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
    const mybutton = document.getElementById("myBtn");
    const topp = document.querySelector('.top');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrolll = window.scrollY;
    mybutton.style.display = "block";
    if (isBottomOfPage()) {
        topp.style.bottom = 85 + 'px';
    } else if (scrolll <= Math.max(document.documentElement.scrollHeight) - window.innerHeight) {
        final = inicios - (TargetHeight - scrolll);
        if (final > target && final <= inicios) {
        topp.style.bottom = Math.max(target,final) + 'px';
        } else {
            topp.style.bottom = 20 + 'px';
        }
    }
  } else {
    mybutton.style.display = "none";
  }
}
//funcion para determinar si llegamos al final de la pagina
function isBottomOfPage() {
    //return window.scrollY + window.innerHeight >= Math.round(document.documentElement.scrollHeight);
    return window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    //const mybutton = document.getElementById("myBtn");
    //document.body.scrollTop = 0; // For Safari
    //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    if ('scrollTo' in window) { // Verifica si el navegador soporta scrollTo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // Fallback para navegadores más antiguos
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
            window.requestAnimationFrame(topFunction);
            window.scrollTo(0, currentScroll - currentScroll / 8); // Efecto suave manual
        }
    }
}
/* function getAndroidVersion() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const match = userAgent.match(/Android\s([0-9\.]+)/);
    return match ? match[1] : null; // Devuelve la versión o null si no es Android
} */
/* function ejecutarParaElementos(elementos) {
    elementos.forEach(elemento => {
      if (elemento.classList.contains('hidden')) {
        console.log("El elemento está oculto. Saltando...");
        return; // Saltar al siguiente elemento
      }
      console.log("Procesando elemento visible:", elemento);
      // Resto del código para elementos visibles
    });
  } */
// Verifica si el dispositivo es móvil
function esMovil() {
    return /Mobi|Android/i.test(navigator.userAgent);
}
let elemID = '';
let classi = '';
//al cargar el documento
document.addEventListener('DOMContentLoaded', () => {
    cargarImg();
    //por cada elemento dentro de la constante "price", realizamos la busqueda del "id"
    //dentro del array "precios".
    //una vez localizado el ID del elemento, dentro del array PRICE, colocamos el valor del mismo
    //dentro del "TEXTCONTENT" del elemento.
    price.forEach((element) => {
        (async () => {
            const descripcion = await buscarDescripcion2(element.id.toLowerCase(), 'precios', 'precios'); // Cambiar a otro identificador para probar
            element.textContent = '$' + descripcion;
            })();
    });
    if (esMovil()) {
        if (window.location.pathname.includes('about')) {
            //
        } else {
            creaTop();
        }
        //creaTop();
        const mybutton = document.getElementById("myBtn");
        const menuItems = document.querySelectorAll('.menu-item');
        const detailView = document.createElement('div');
        detailView.id = 'details';
        detailView.className = 'detail-view';
        document.querySelector('main').appendChild(detailView);
        
        menuItems.forEach((item, index) => {            
            item.addEventListener('click', () => {
                // Calcular la posición del artículo
                const rect = item.getBoundingClientRect();
                const positionX = rect.left + window.scrollX;
                const positionY = rect.top + window.scrollY;                

                // Establecer el estilo de `detailView` para que coincida
                detailView.style.left = `${positionX}px`;
                detailView.style.top = `${positionY}px`;
                detailView.style.width = `${rect.width}px`; // Mantener el ancho del artículo
                detailView.style.height = `${rect.height}px`; // Mantener la altura del artículo
                detailView.style.transform = 'scale(0)';
                // Forzar un reflow para registrar el estado inicial
                detailView.offsetHeight;
                /* for (let c = 0; c < menuItems.length; c++) {
                    var menuclass = menuItems[c];
                    if (menuclass.classList.value === 'menu-item hidden') {
                        menuclass.classList.remove('hidden');
                    } else if (menuclass.className != 'menu-item hidden') {
                        item.classList.add('hidden');
                    }
                } */
                //item.classList.add('hidden');

                const itemid = document.getElementById(item.id);
                //itemid.classList.add('hidden');
                let menuItemsArray = Array.from(menuItems);
                menuItemsArray.forEach((menuclass) => {
                    if (menuclass.classList.contains('hidden')) {
                        detailView.classList.remove('active');
                        menuclass.classList.remove('hidden'); // Mostrar el elemento
                    } //else {
                        //itemid.classList.add('hidden'); // Ocultar el elemento
                    //}
                });
                itemid.classList.add('hidden');

                


                setTimeout(() => {
                    item.ontransitionend = (evento) => {
                        if (evento.propertyName === 'transform' && item.classList.contains('hidden')) { // Asegura que estamos escuchando transform
                            //if (classi == 'ok'){
                            detailView.classList.add('active');
                            detailView.id = 'details-' + item.id;
                            //lalalala(detailView);
                            detailView.style.transform = 'scale(1)';
                            //}
                        }
                    };
                }, 300);
                /* if (detailView.classList.contains('active')) {
                    detailView.classList.remove('active');
                    for (let c = 0; c < menuItems.length; c++) {
                        //var menuclass = menuItems[c];
                        if (menuclass.classList.contains('hidden')) {
                            menuclass.classList.remove('hidden');
                        } else {
                            menuclass.classList.add('hidden');
                        }
                    }
                } */
                // Mostrar información detallada
                const detailContent = `
                    <img src="Imagenes/logo-transparente.webp" alt="" id="FondoImg" class="FondoImg">
                    <div class="descContent">
                        <h2>${item.querySelector('h3').textContent}</h2>
                        <!-- <p>${item.querySelector('p:not(.price)').textContent}</p> -->
                        <div class="descripcion">
                            <!-- <p name="text" id="descr" class="descripcion"></p> -->
                            <p id="descr"></p>
                        </div>
                        <h1>${item.querySelector('.price').textContent}</h1>
                    </div>
                    <button class="back-button"><img src="Imagenes/close.webp" alt="" id="btnClose" class="btnClose"></button>
                `;
                detailView.innerHTML = detailContent;
                var lklk = item.querySelector('.price');
                // Ejemplo de uso
                (async () => {
                    const descripcion = await buscarDescripcion2(lklk.id.toLowerCase(), 'descripciones', 'descripciones');
                    const AreaDescription = document.querySelector('#descr');
                    AreaDescription.textContent = descripcion;
                })();
                // Manejar el botón "Volver"
                const backButton = detailView.querySelector('.back-button');
                backButton.addEventListener('click', () => {
                    if (esTransform(detailView) > 0) {
                        detailView.style.transform = 'scale(0)';
                    } else {
                        detailView.style.transform = 'scale(1)';
                    }
                    detailView.classList.replace('active', 'final');
                    setTimeout(() => {
                        detailView.ontransitionend = (evento) => {
                            if (evento.propertyName === 'transform' && detailView.classList.contains('final')) { // Asegura que estamos escuchando transform
                                detailView.classList.remove('final');
                                detailView.innerHTML = ''; // Limpia el contenido
                                item.classList.remove('hidden'); // Vuelve a mostrar el elemento
                            }
                        };
                    },300);
                });
            });
        });
    }
});
//definimos la funcion que verifica si un componente tiene transformacion
function esTransform(ele){
    const estilo = window.getComputedStyle(ele);
      const transform = estilo.transform;
      if (transform === 'none') {
        console.log('No se ha aplicado ninguna transformación.');
        return;
      }
      // Analizamos la matriz de transformación
      const valores = transform.match(/matrix\(([^)]+)\)/)[1].split(', ');
      const escalaX = parseFloat(valores[0]); // El valor de scaleX está en la posición 0
      const escalaY = parseFloat(valores[3]); // El valor de scaleY está en la posición 3 (en una matriz 2D)
      let resultado = '';
      if (escalaX > 0 && escalaY > 0) {
        resultado = 1;
      } else {
        resultado = 0;
      }
      //console.log(resultado);
      //console.log(`ScaleX: ${escalaX}, ScaleY: ${escalaY}`);
      return resultado;
}
  // Función para cargar el archivo JSON
async function cargarJson(url) {
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error(`Error al cargar JSON: ${respuesta.statusText}`);
      const datos = await respuesta.json(); // Parsear el JSON
      return datos;
    } catch (error) {
      console.error("Error al cargar el archivo JSON:", error);
    }
  }
// Función para buscar una descripción por su identificador
async function buscarDescripcion2(identificador, titu, archivo) {
    const datos = await cargarJson("assets/" + archivo + '.json');
    if (titu == 'precios') {
        if (datos && datos.precios && datos.precios[identificador]) {
        return datos.precios[identificador];
        } else {
        return "Descripción no encontrada.";
        }
    } else {
        if (datos.descripciones && datos.descripciones[identificador]) {
            return datos.descripciones[identificador];
        } else {
            return "Identificador no encontrado.";
        }
    }
}
//funcion que carga la foto del about
function CargaAbout () {
    if (window.location.pathname.includes('about') || location.href.includes('about')) {
        const imgabout = document.querySelector('#about');
        //const urrl = 'https://drive.google.com/thumbnail?id=1YZXo3GZ2YbBhlp6sXreHzNA2yd54bq8z&sz=w4000';
        //cargamos la imagen si es WINDOWS en una resolucion de 2K
        //const urlAbout = 'https://drive.google.com/thumbnail?id=1jtZBdlz_Pzj1W_RU5xWxLn_-8CWtZBUB&sz=w2000';
        const urlAbout = 'https://drive.google.com/thumbnail?id=1UfPrutLsxYQr52bRgDICUiTtRvd07ylU&sz=w1280';
        imgabout.style.backgroundSize = 'cover';
        imgabout.style.backgroundRepeat = 'no-repeat';
        if (plataforma.includes('Android')) {
            imgabout.src = 'Imagenes/about-baja.webp';
            imgabout.alt = 'About-Baja';
        } else if (plataforma.includes('Win')) {
            imgabout.src = urlAbout;
            imgabout.alt = 'About-1280';
        }
    }
}
//funcion que oculta o expande el menu segun scroll
function menuVisible2(){
    //const menu = document.querySelector(".menu");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if (menu.classList.value === 'menu active') {
            menu.classList.remove('active');
        }
        if (isBottomOfPage()) {
            if (menu.classList.value === 'menu') {
                menu.classList.add('active');
            }
        }
    } else {
        if (menu.classList.value === 'menu') {
            menu.classList.add('active');
        }
    }
}
const menuItems = document.querySelectorAll('.menu-item');

function sisi (dire) {
    const deta = document.querySelector('.detail-view');
    const iid = deta.id;
    //console.log(deta.classList);
    //console.log(iid);    

    menuItems.forEach((item, index) => {            
        if (item.classList.contains('hidden')) {
            const rect = item.getBoundingClientRect();
            //const positionX = rect.left + window.scrollX;
            //const positionY = rect.top + window.scrollY;    
            //console.log(deta.getBoundingClientRect().top);            
            //window.onscroll = function () {
                if (deta.getBoundingClientRect().top <= -370) {
                //if (document.body.scrollTop > rect.height || document.documentElement.scrollTop > rect.height) {
                            //
                    //console.log('si');
                    deta.classList.remove('active');
                    item.classList.remove('hidden');
                } else if (isBottomOfPage() || window.scrollY == 0) {
                    deta.classList.remove('active');
                    item.classList.remove('hidden');
                    //console.log('no');
                }/*  else if (dire == 'arriba'){
                    deta.classList.remove('active');
                    item.classList.remove('hidden');
                } */
            //}
        }
    });
}

