const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
const imagensSlides = document.getElementsByClassName('slide')
let slideAtual = 0
let slideAnterior = 0

setaAvancar.addEventListener('click', function () {
    slideAnterior = slideAtual;
    slideAtual++;

    mostrarSlide();
    esconderSlide();
    desabilitarSeta();
});

setaVoltar.addEventListener('click', function () {
    slideAnterior = slideAtual;
    slideAtual--;

    mostrarSlide();
    esconderSlide();
    desabilitarSeta();
});

function mostrarSlide() {
    imagensSlides[slideAtual].classList.add('mostrar')
}

function esconderSlide() {
    imagensSlides[slideAnterior].classList.remove('mostrar')
}

function desabilitarSeta() {
    const primeiroSlide = 0;
    const ultimoSlide = imagensSlides.length - 1;

    slideAtual === primeiroSlide ? setaVoltar.classList.add('opacidade') :
        setaVoltar.classList.remove('opacidade')

    slideAtual === ultimoSlide ? setaAvancar.classList.add('opacidade') :
        setaAvancar.classList.remove('opacidade')
}