Algoritmo "Contador Inteligente"


Var

   i, f : inteiro

Inicio

      i <- 0
      F <- 0
      Escreval ("----------------------")
      Escreval ("CONTAGEM INTELIGENTE")
      Escreval ("----------------------")

      Escreva ("Inicio: ")
      Leia (i)
      Escreva ("Fim: ")
      Leia (f)

      Escreval ("----------------------")
      Escreval ("       CONTANDO       ")
      Escreval ("----------------------")

      Se (i < f) entao
         Enquanto (i < f+1) faca
                  escreva (i,"..  ")
                  i <- i + 1
         FimEnquanto
      Senao
           Enquanto (i > f-1) faca
           escreva (i, "..  ")
           i <- i- 1
           FimEnquanto
      FimSE

fimalgoritmo