document.querySelector(".tirar-carta").addEventListener("click", _ => {
    tirarUmaCartaAleatoriaDoBaralho()
})

async function criarBaralhoEmbarelhado() {
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCarta(deck_id) {
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function tirarUmaCartaAleatoriaDoBaralho() {
    const baralho = await criarBaralhoEmbarelhado()
    const carta = await tirarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById("carta").src = imagemCarta
}

tirarUmaCartaAleatoriaDoBaralho()
console.log("Funções Assincronas")