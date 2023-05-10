// Destructuring é um recurso novo da ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereço: {
        Logradouro: "Rua ABC",
        Número: 154,
    }
}

// Declaração da variavel {atributos} = (Objeto)
const { nome, idade } = pessoa
console.log(nome, idade)

// ": x" Renomeia o nome da variavel.
const { nome: n, idade: i } = pessoa
console.log(n, i)

// Se o atributo não existir no objetoo resultado será undefined.
// "= x" Atribui um valor padrão para ser utilizado quando a variavel for undefined ou null. 
const { sobrenome, sexo = "masculino" } = pessoa
console.log(sobrenome, sexo)

// Para selecionar um objeto/array aninhado, é necessario informar o camingo dele no objeto.
const { endereço: { Logradouro, Número, cep } } = pessoa
console.log(Logradouro, Número, cep)

// Se tentarmos acessar um objeto aninhado que não existe, retornara o erro: Cannot read properties of undefined. 
// Somente o último objeto pode esta undefined, caso contrario, retornara o erro acima.
const { conta: { ag, num } } = pessoa
console.log(ag, num)

