let nome1;
let idade1;
let nome2;
let idade2;
let diferenca;

nome1 = window.prompt("Qual é o seu nome?")
idade1 = window.prompt("Qual é a sua idade?")

nome2 = window.prompt("Qual é o seu nome?")
idade2 = window.prompt("Qual é a sua idade?")

diferenca = idade1 - idade2

window.alert(`Nome: ${nome1} \nIdade: ${idade1} anos \n\nNome: ${nome2} \nIdade: ${idade2} anos \n\n Diferença de idade: ${diferenca} anos`)