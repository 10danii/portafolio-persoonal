// Esperamos a que se cargue todo el contenido de la pÃ¡gina
document.addEventListener("DOMContentLoaded", function() {
    // FunciÃ³n para animar la barra de progreso
    function animateProgressBar(element, targetWidth, duration) {
        let startWidth = 0;
        let increment = targetWidth / (duration / 10); // Incremento por cada paso de animaciÃ³n
        let currentWidth = 0;

        let interval = setInterval(function() {
            currentWidth += increment;
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                currentWidth = targetWidth;
            }

            element.style.width = currentWidth + "%";
            element.innerHTML = Math.floor(currentWidth) + "%";
        }, 10); // Intervalo de 10 milisegundos para suavizar la animaciÃ³n
    }

    // Obtener todas las barras de progreso
    let progressBars = document.querySelectorAll(".progress");

    // Animar cada barra de progreso
    progressBars.forEach(function(progressBar) {
        let targetWidth = parseFloat(progressBar.style.width); // Obtener el ancho objetivo
        animateProgressBar(progressBar, targetWidth, 1000); // DuraciÃ³n de la animaciÃ³n: 1000 ms (1 segundo)
    });
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});




