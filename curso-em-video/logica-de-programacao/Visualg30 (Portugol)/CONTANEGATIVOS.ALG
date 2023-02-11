Algoritmo "contanegativos"

Var
   n, cont, totaln : inteiro



Inicio
      cont <- 1
      Repita
            Escreva ("Digite o ", cont, "o. valor: ")
            Leia (n)
            Se (n < 0) entao
               totaln <- totaln + 1
            FimSe
            cont <- cont + 1
            ate (cont > 5)
      Escreva ("VocÊ digitou um total de: ", totaln, " número negativos.")

Fimalgoritmo