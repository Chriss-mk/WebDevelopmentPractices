const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        if (boton.id === 'c') {
            pantalla.textContent = '0';
            return;
        }

        if (boton.id === 'borrar') {
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'ERROR') {
                pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === 'igual') {
            try {
                let resultado = eval(pantalla.textContent); // Evalúa la expresión matemática
                // Si el resultado tiene decimales, limitar a 4 si es necesario
                if (resultado % 1 !== 0) {
                    resultado = parseFloat(resultado.toFixed(4)); // Muestra hasta 4 decimales
                }
                pantalla.textContent = resultado;
            } catch {
                pantalla.textContent = 'ERROR';
            }
            return;
        }

        if (boton.id === 'raiz') {
            const valor = parseFloat(pantalla.textContent);
            if (isNaN(valor) || valor < 0) { 
                pantalla.textContent = 'ERROR'; // No permite raíces de números negativos
            } else {
                pantalla.textContent = Math.sqrt(valor).toFixed(4);
            }
            return;
        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'ERROR') {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});
