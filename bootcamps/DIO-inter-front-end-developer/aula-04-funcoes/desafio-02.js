function metodoDePagamento (numero){
    if (numero === 1){
        console.log(aplicadorDeDesconto(precoEtiqueta, 10));
    }else if (numero === 2){
        console.log(aplicadorDeDesconto(precoEtiqueta, 15));
    }else if (numero === 3){
        console.log((precoEtiqueta)); 
    }else{
        console.log(aplicadorDeJuros(precoEtiqueta, 10));
    }}
        
function aplicadorDeDesconto(valor, desconto){
    return valor - (valor * (desconto / 100));
}

function aplicadorDeJuros(valor, desconto){
    return valor + (valor * (desconto / 100));
}

let precoEtiqueta = 300;

metodoDePagamento(4);