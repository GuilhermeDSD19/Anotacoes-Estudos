Algoritmo "Aproveitamento"


Var

   AO1, AO2, media : real

Inicio
      Escreval ("----------------------")
      Escreval ("ESCOLA JAVALI CANSADO")
      Escreval ("----------------------")
      Escreva ("Nota da AO1: ")
      Leia (AO1)
      Escreva ("Nota da AO2: ")
      Leia (AO2)
      media <- (AO1 + AO2) / 2
      Escreval ("----------------------")
      Escreval ("MEDIA:", media)
      Se (media > 9) entao
         Escreva ("Aproveitamento: A")
      Senao
           Se(media >= 8) e (media <= 8.9)  entao
              Escreval ("Aproveitamento: B")
           Senao
                Se (media >= 7) e (media <= 7.9) entao
                   Escreval ("Aproveitamento: C")
                Senao
                     Se (media >= 6) e (media <= 6.9) entao
                        Escreval ("Aproveitamento: D")
                     Senao
                          Se (media >= 5) e (media <= 5.9) entao
                             Escreval ("Aproveitamento: E")
                          Senao
                             Escreval ("Aproveitamento: F")
                          FimSe
                     FimSe
                FimSe
           FimSe
      FimSe

      
      



Fimalgoritmo