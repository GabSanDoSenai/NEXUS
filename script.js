let indiceAtual = 0; 
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length; 
const intervalo = 5000; 

function mostrarSlide(indice) {
    const carrosselSlides = document.getElementById('carrossel');
    carrosselSlides.style.transform = `translateX(-${indice * 100}%)`;
}

document.getElementById('proximo').addEventListener('click', function() {
    indiceAtual = (indiceAtual + 1) % totalSlides;
    mostrarSlide(indiceAtual);
});

document.getElementById('anterior').addEventListener('click', function() {
    indiceAtual = (indiceAtual - 1 + totalSlides) % totalSlides;
    mostrarSlide(indiceAtual);
});

function autoAvancar() {
    indiceAtual = (indiceAtual + 1) % totalSlides;
    mostrarSlide(indiceAtual);
}

setInterval(autoAvancar, intervalo);
