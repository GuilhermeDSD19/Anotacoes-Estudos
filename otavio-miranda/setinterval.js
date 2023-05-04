function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function (){
    console.log(mostrarHora())
}, 1000)

setInterval(function(){
    clearInterval(timer)
}, 10000)  
