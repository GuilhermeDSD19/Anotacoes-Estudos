Algoritmo "OrdenaVetor"

Var
   Vet: vetor [1..10] de inteiro
   i, j, aux: inteiro
Inicio
   Para i <- 1 ate 10 faca
      Escreva ("Digite um valor: ")
      Leia (vet[i])
   FimPara
   
   Para i <- 1 ate 9 faca
      Para j <- i+1 ate 10 faca
         Se (vet[i] > vet[j]) entao
             aux <- vet[i]
             vet[i] <- vet [j]
             vet[j] <- aux
         FimSe
      FimPara
   FimPara
   
   Para i <- 1 ate 10 faca
      Escreva ("{",vet[i], "}")
   FimPara


Fimalgoritmo