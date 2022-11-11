Algoritmo "éprimo"

Var

   cont, n, divt : inteiro

Inicio

      cont <- 1
      divt <- 0
      Escreva ("Digite o valor: ")
      Leia (n)
      Repita
            Se (n % cont = 0)  entao
               divt <- divt + 1
            FimSe
            cont <- cont + 1
      Ate (cont > n)
      Se (divt > 2) entao
         Escreval ("O valor ", n, " não é um numero primo")
      Senao
         Escreval ("O valor ", n, " é um numero primo")
      FimSe


Fimalgoritmo