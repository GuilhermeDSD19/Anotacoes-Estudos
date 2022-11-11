Algoritmo "soC"

Var
   Nome : Caractere
   soc: vetor [1..10] de caractere
   c, totc : inteiro

Inicio
   Para c <- 1 ate 10 faca
      Escreva ("Digite o seu nome: ")
      Leia (nome)
      Se (copia(maiusc(nome), 1, 1) = "C") entao
         totc <- totc + 1
         soc[totc] <- nome
      FimSe
   FimPara
   
   Limpatela
   Escreval ("LISTAGEM FINAL")
   Para c <- 1 ate totc faca
      Escreval (soc[c])
   FimPara

Fimalgoritmo