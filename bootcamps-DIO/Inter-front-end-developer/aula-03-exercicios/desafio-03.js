/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

let produto = 1000;
let desDebito = produto - (produto * 0.10);
let desDinheiroPix = produto - (produto * 0.15);
let parcelado2x = produto;
let parceladoem7X = produto + (produto * 0.10);
let formadepagamento = "debito";

if (formadepagamento == "debito"){
    console.log("Total: R$",desDebito.toFixed(2));
} 
else if (formadepagamento == "pix"){
    console.log("Total: R$",desDinheiroPix.toFixed(2), "à vista");
}
else if (formadepagamento == "parcelado"){
    console.log("Total:", parcelado2x.toFixed(2), "parcelado em 2x parcelas de R$:",(parcelado2x / 2).toFixed(2));
}
else {
    console.log("Total:", parceladoem7X.toFixed(2), "parcelado em 7x parcelas de R$:",(parceladoem7X/ 7).toFixed(2));
}

/* 
let precoetiqueta = 100;
let formadepagamento = 1;

if (formadepagamento === 1) {
    console.log(precoetiqueta - (precoetiqueta * 0.1));
} else if (formadepagamento === 2) {
    console.log(precoetiqueta - (precoetiqueta * 0.15));
} else if (formadepagamento === 3) {
    console.log(precoetiqueta); 
} else {
    console.log(precoetiqueta + (precoetiqueta * 0.1));
}
*/