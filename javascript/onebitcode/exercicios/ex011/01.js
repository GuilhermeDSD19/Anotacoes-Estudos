let nome;
let idade;
let confirmacao;

alert("Bem-vindo! A seguir pediremos que informe alguns dados.")

nome = window.prompt("Qual é o seu nome?")
idade = window.prompt("Qual é a sua idade?")
confirmacao = window.confirm("Você tem " + idade + " anos?")

window.alert(`Nome: ${nome}, \nIdade: ${idade} anos, \nConfirmação: ${confirmacao}`)