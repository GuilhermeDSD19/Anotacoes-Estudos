Algoritmo "funcoes"

Var

   N: vetor [1..7] de inteiro
   C, ptotal: inteiro

Inicio
  Para c <- 1 ate 7 faca
    Escreva ("Digite o ", c, "o. valor: ")
    Leia (n[c])
    Se (n[c] % 2 = 0) entao
       ptotal <- ptotal + 1
    Escreval ("O ",c , "o. valor é PAR.")
    Senao
       Escreval ("O ",c , "o. valor é IMPAR.")
    FimSe
  FimPara
  Escreva ("Foram digitados um total de", ptotal, " números pares")


Fimalgoritmo