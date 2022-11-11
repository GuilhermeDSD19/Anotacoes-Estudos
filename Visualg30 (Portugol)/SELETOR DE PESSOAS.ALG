Algoritmo "Seletor de Pessoas"

Var
     sexo, fim : caractere
     c_cabelo, idade, hcont, fcont : inteiro
     


Inicio

      Repita
            Escreval ("==========================")
            Escreval ("    SELETOR DE PESSOAS    ")
            Escreval ("==========================")
            Escreva ("Qual o sexo? [M/F] ")
            Leia (sexo)
            Escreva ("Qual a idade? ")
            Leia (idade)
            Escreval ("Qual a cor do cabelo? ")
            Escreval ("--------------------------")
            Escreval ("[1] Preto")
            Escreval ("[2] Castanho")
            Escreval ("[3] Loiro")
            Escreval ("[4] Ruivo")
            Leia (c_cabelo)
            Se (sexo = "m") e (idade >= 18) e (c_cabelo = 2) entao
               hcont <- hcont + 1
            FimSe
            Se (sexo = "f") e (idade >= 25) e (idade <= 30) e (c_cabelo = 3) entao
               fcont <- fcont + 1
            FimSe
            Escreva ("Quer continuar? [S/N]")
            Leia (fim)
            limpatela
      Ate (fim = "n")
      Escreval ("--------------------------")
      Escreval ("     RESULTADO FINAL      ")
      Escreval ("--------------------------")
      Escreval ("Total de homens com mais de 18 anos e cabelos castanhos: ", hcont)
      Escreval ("Total de mulheres emtre 25 e 30 anos com cabelos loiros: ", fcont)


Fimalgoritmo