Algoritmo "SuperContador"

Var

   c, r : real

Inicio

      Repita
      Escreval ("======================")
      Escreval ("|        MENU        |")
      Escreval ("======================")
      Escreval ("|    [1] de 1 a 10   |")
      Escreval ("|    [2] de 10 a 1   |")
      Escreval ("|    [3] Sair        |")
      Escreva ("======================")

      Leia (r)


      Escolha (r)
      Caso 1
       c <- 1
           Repita
           Escreval (c)
           c <- c + 1
           Ate (c > 10)
           
      Caso 2
       c <- 10
           Repita
           Escreval (c)
           c <- c - 1
           Ate (c < 1)
           
       Caso 3
            Escreval ("Saindo....")
       FimEscolha
       Ate (r = 3)
           


      
      


Fimalgoritmo