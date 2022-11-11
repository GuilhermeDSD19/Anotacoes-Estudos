Algoritmo "Futebol"


Var

    gban, gmad, dif : inteiro

Inicio
      Escreval ("-------------------")
      Escreval ("BANGU X MADUREIRA")
      Escreval ("-------------------")
      Escreva ("Quantos gols o Bangu fez? ")
      Leia (gban)
      Escreva ("Quantos gols o Madureira fez? ")
      Leia (gmad)
      dif <- abs (gban - gmad)
      Se (dif = 0) entao
         Escreval ("-------------------")
         Escreval ("Diferença: ", dif)
         Escreval ("Status: Empate")
         Escreval ("-------------------")
      Senao
           Se (dif >= 1) e (dif <= 4) entao
              Escreval ("-------------------")
              Escreval ("Diferença: ", dif)
              Escreval ("Status: Normal")
              Escreval ("-------------------")
           Senao
              Escreval ("-------------------")
              Escreval ("Diferença: ", dif)
              Escreval ("Status: Goleada")
              Escreval ("-------------------")
           FimSe
      Fimse
Fimalgoritmo