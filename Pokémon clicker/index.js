const elementoClicavel = document.querySelector('.elemento-clicavel');
const valor = document.getElementById('valor');

let contador = 0;

elementoClicavel.addEventListener('click', () => {
    contador++;
    valor.textContent = contador;
});