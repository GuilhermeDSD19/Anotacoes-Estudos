Algoritmo "Corretor de Provas"

Var
   r, gab : vetor [1..5] de caractere
   nome : vetor [1..3] de caractere
   c, cr, cm : inteiro
   nota : vetor [1..3] de real
   mediatotal : real
Inicio
   Escreval ("------------------------------")
   Escreval ("Passo 1 - Cadasto do Gabarito")
   Escreval ("------------------------------")
   Para c <- 1 ate 5 faca
      Escreva ("Questão ", c, ": ")
      Leia (gab[c])
   FimPara
   LimpaTela
   
   Para c <- 1 ate 3 faca
      Escreval("------------------------------")
      Escreval ("ALUNO", c)
      Escreval("------------------------------")
      Escreva ("Nome: ")
      Leia (nome[c])
      Para cr <- 1 ate 5 faca
         Escreva ("Questão ", cr, ":")
         Leia (r[cr])
         Se (r[cr] = gab[cr]) entao
            nota[c] <- nota[c] + 2
         FimSe
      FimPara
      mediatotal <- (nota[1] + nota[2] + nota[3]) / 3
   LimpaTela
   FimPara
   
   Escreval("------------------------------")
   Escreval ("NOTAS FINAIS")
   Escreval("------------------------------")
   Para cm <- 1 ate 3 faca
      Escreval (nome[cm]:10, nota[cm]:12:1)
   FimPara
   Escreval("------------------------------")
   Escreva ("Media da turma: ", mediatotal:6:2)
Fimalgoritmo

LimpaTela