async function leerTexto() {
    // Obtener el texto del área de texto
    try {
        const texto = document.querySelector('#descr');
        const btn = document.querySelector('.btnPlay');
        if (btn.classList == 'btnPlay') {
            btn.classList.add('stop');        
            if (texto !== "") {
                const utterance = new SpeechSynthesisUtterance(texto.textContent);
                // Opcional: configurar el idioma y la voz
                utterance.lang = 'es-ES'; // Español
                utterance.volume = 1; // 0 a 1 (Volumen)
                utterance.rate = 1; // Velocidad de habla
                utterance.pitch = 1; // Tono

                // Configurar el evento onend para detectar cuando termine la lectura
                utterance.onend = function(event) {
                    btn.classList.remove('stop');                
                };

                // Iniciar la lectura
                speechSynthesis.speak(utterance);
            }
        } else {
            btn.classList.remove('stop');
            if (speechSynthesis.speaking) {
                speechSynthesis.cancel();
            }        
        }    
    } catch (error) {
        console.error("Error al leer el texto: ", error);
    }
}