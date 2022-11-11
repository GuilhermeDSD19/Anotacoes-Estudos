Algoritmo "Analisador de Valores"

Var

    c, r, soma_total, nulo, divisiveis, soma_pares : inteiro
    media : real

Inicio

      Para c <- 1 ate 5 faca
           Escreva ("Digite o ", c, "o. valor: ")
           Leia (r)
           soma_total <- soma_total + r
           media <- soma_total / 5
           Se (r = 0) entao
              nulo <- nulo + 1
           FimSe
           Se (r % 5 = 0) entao
              divisiveis <- divisiveis + 1
           FimSe
           Se (r % 2 = 0) entao
              soma_pares <- soma_pares + r
           FimSe
      FimPara
      
      Escreval ("A soma total dos valores é de: ", soma_total)
      Escreval ("A media dos valores é de: ", media:5:1)
      Escreval ("Foram digitados ", divisiveis, " numeros divisiveis.")
      Escreval ("Foram digitados ", nulo, " valores nulos.")
      Escreval ("A soma total dos valores pares é de: ", soma_pares)

Fimalgoritmo



Receber 5 valores e Eibir
soma de valores
media entre os valores
Quantos são nulos
quantos são dibisiveis

Soma dos pares