Algoritmo "Campeonato Carioca"

Var

   time : vetor [1..3] de caractere
   c, j: inteiro


Inicio
   Escreval ("-------------------")
   Escreval ("CAMPEONATO CARIOCA")
   Escreval ("-------------------")
   Para c <- 1 ate 3 faca
      Escreva ("Nome do ", c, "o. time: ")
      Leia (time[c])
   FimPara
   LimpaTela
   Escreval ("-------------------")
   Escreval ("TABELA DE PARTIDAS")
   Escreval ("-------------------")

   Para c <- 1 ate 3 faca
        Para j <- 1 ate 3 faca
              Se (c <> j) entao
                 Escreval (time[c]:12," [] X [] ", time[j]:12)
              FimSe
        FimPara
   FimPara
Fimalgoritmo