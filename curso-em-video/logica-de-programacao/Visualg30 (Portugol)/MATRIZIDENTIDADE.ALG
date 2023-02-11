Algoritmo "MatrizIdentidade"

Var
   mid: vetor [1..15, 1..15] de inteiro
   i, c : inteiro

Inicio

   Para i <- 1 ate 15 faca
      Para c <- 1 ate 15 faca
      Se (i = c) entao
         mid[i,c] <- 1
      Senao
         mid[i,c] <- 0
      FimSe
      FimPara
   FimPara
   
   Para i <- 1 ate 15 faca
      Para c <- 1 ate 15 faca
      Escreva (mid[i,c]:5)
      FimPara
      Escreval ()
   FimPara
   


Fimalgoritmo