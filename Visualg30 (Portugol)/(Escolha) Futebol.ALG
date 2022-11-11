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
      Escolha dif
      
             Caso 0
             Escreval ("-------------------")
             Escreval ("DIFERENÇA: ", dif)
             Escreval ("STATUS: Empate")
             Escreval ("-------------------")
             
             Caso 1,2,3,4
             Escreval ("-------------------")
             Escreval ("DIFERENÇA: ", dif)
             Escreval ("STATUS: NORMAL")
             Escreval ("-------------------")
             
             OutroCaso
             Escreval ("-------------------")
             Escreval ("DIFERENÇA: ", dif)
             Escreval ("STATUS: GOLEADA")
             Escreval ("-------------------")
             
      FimEscolha
             

Fimalgoritmo