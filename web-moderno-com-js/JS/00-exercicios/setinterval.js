var texto = document.querySelector('#text')
var valor = 0
var contador 


/*
setTimeout(function(){
    console.log('setTimeout')
}, 3000)
*/

contador = setInterval(function () {
    texto.innerHTML=`${valor}`
    valor++
}, 1000)



function stop() {
    clearInterval(contador)
}

