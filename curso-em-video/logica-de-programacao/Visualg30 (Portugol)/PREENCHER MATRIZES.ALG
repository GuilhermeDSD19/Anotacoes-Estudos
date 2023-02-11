Algoritmo "Preencher Matrizes"

Var
   mat : vetor [1..3, 1..3] de inteiro
   l, c, ptotal : inteiro
Inicio
   Para l <- 1 ate 3 faca
      Para c <- 1 ate 3 faca
         Escreva ("Digite o valor da posição [", l, ",", c, "]: ")
         Leia (mat[l,c])
      FimPara
   FimPara
   
   Escreval ("Matriz")
   Escreval ("------------------")

   Para l <- 1 ate 3 faca
      Para c <- 1 ate 3 faca
         Se (mat[l,c] % 2 = 0) entao
            Escreva ("{", mat[l,c], "}":4)
            ptotal <- ptotal + 1
         Senao
            Escreva (mat[l,c]:4)
         FimSe
      FimPara
      Escreval ()
   FimPara
   Escreval ()
   
   Escreval ("Foram digitados ", ptotal, "números PARES")

Fimalgoritmo