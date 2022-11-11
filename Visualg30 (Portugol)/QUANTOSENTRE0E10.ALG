Algoritmo "QuantosEntre0e10"

Var
   c, n, s, sto : inteiro
Inicio

      Para c <- 1 ate 6 faca
           Escreva ("Digite um valor: ")
           Leia (n)
           Se (n >= 1) e (n <= 10) e (n%2=1) entao
              s <- s + 1
           FimSe
           Se (n%2=1) entao
              sto <- sto + n
           FimSe
      FimPara
      Escreval ("No total foram digitados", s, " numeros impares de 0 até 10")
      Escreval ("A soma de todos os números impares foi de ", sto)




Fimalgoritmo