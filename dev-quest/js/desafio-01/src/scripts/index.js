// Minha Versão
// let setaEsquerda = document.querySelector('.esquerda')
// let setaDireita = document.querySelector('.direita')

// setaEsquerda.addEventListener('click', function () {
//     posicaoDoSlider('esquerda');
// })

// setaDireita.addEventListener('click', function () {
//     posicaoDoSlider('direita');
// })

// let posicaoAtual = 0

// function posicaoDoSlider(ladoClicado) {
//     // Esquerda
//     if (ladoClicado == 'esquerda') {
//         if (posicaoAtual > 0) {
//             posicaoAtual--
//             AlterarBackgroundECores(posicaoAtual)
//         }
//     } else { // Direita
//         if (posicaoAtual < 3) {
//             posicaoAtual++
//             AlterarBackgroundECores(posicaoAtual)
//         }
//     }
// }

// function trocarBackground(destinoImagem) {
//     document.body.style.background = `url(${destinoImagem}) no-repeat center center/cover`;
// }

// function trocarNumeroDoTitulo (numeroDasImagens){
//     document.querySelector('.titulo').innerHTML=`Titulo Imagem ${numeroDasImagens}`
// }

// function trocarCorDoSaibaMais(cor){
//     document.querySelector('.saiba-mais').style.color=`${cor}`
// }

// function AlterarBackgroundECores(posicao) {
//     switch (posicao) {
//         case 0:
//             setaEsquerda.style.opacity="50%"
//             trocarBackground("src/imagens/flores-rosas.jpg")
//             trocarNumeroDoTitulo(1)
//             trocarCorDoSaibaMais('#C50000')
//             break
//         case 1:
//             setaEsquerda.style.opacity="100%"
//             trocarBackground("src/imagens/flores-verdes.jpg")
//             trocarNumeroDoTitulo(2)
//             trocarCorDoSaibaMais('#D9DD10')
//             break
//         case 2:
//             setaDireita.style.opacity="100%"
//             trocarBackground("src/imagens/montanhas.jpg")
//             trocarNumeroDoTitulo(3)
//             trocarCorDoSaibaMais('#A63A17')
//             break
//         case 3:
//             setaDireita.style.opacity="50%"
//             trocarBackground("src/imagens/lago.jpg")
//             trocarNumeroDoTitulo(4)
//             trocarCorDoSaibaMais('#10ACDD')
//             break
//     }
// }

// Verão Refatorado pelo ChatGPT 

let setaEsquerda = document.querySelector('.esquerda')
let setaDireita = document.querySelector('.direita')

setaEsquerda.addEventListener('click', function () {
    moverSliderPara('esquerda');
})

setaDireita.addEventListener('click', function () {
    moverSliderPara('direita');
})

const imagens = [
    {
        background: "src/imagens/flores-rosas.jpg",
        titulo: "Titulo Imagem 1",
        cor: "#C50000",
    },
    {
        background: "src/imagens/flores-verdes.jpg",
        titulo: "Titulo Imagem 2",
        cor: "#D9DD10",
    },
    {
        background: "src/imagens/montanhas.jpg",
        titulo: "Titulo Imagem 3",
        cor: "#A63A17",
    },
    {
        background: "src/imagens/lago.jpg",
        titulo: "Titulo Imagem 4",
        cor: "#10ACDD",
    },
    {
        background: "src/imagens/noite.jpg",
        titulo: "Titulo Imagem 5",
        cor: "#102040",
    },
];

let posicaoAtual = 0

function moverSliderPara(ladoClicado) {
    if (ladoClicado === "esquerda" && posicaoAtual > 0) {
        posicaoAtual--;
    } else if (ladoClicado === "direita" && posicaoAtual < imagens.length - 1) {
        posicaoAtual++;
    }
    trocarBackground(imagens[posicaoAtual].background);
    trocarNumeroDoTitulo(imagens[posicaoAtual].titulo);
    trocarCorDoSaibaMais(imagens[posicaoAtual].cor);
    setaEsquerda.style.opacity = posicaoAtual === 0 ? "50%" : "100%";
    setaDireita.style.opacity = posicaoAtual === imagens.length - 1 ? "50%" : "100%";
}

function trocarBackground(destinoImagem) {
    document.body.style.background = `url(${destinoImagem}) no-repeat center center/cover`;
}

function trocarNumeroDoTitulo(numeroDasImagens) {
    document.querySelector('.titulo').innerHTML = `${numeroDasImagens}`
}

function trocarCorDoSaibaMais(cor) {
    document.querySelector('.saiba-mais').style.color = `${cor}`
}