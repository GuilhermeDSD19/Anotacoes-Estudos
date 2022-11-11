Algoritmo "Notas Alunos"


Var
   c : inteiro
   nome: vetor [1..5] de caractere
   n1: vetor [1..5] de real
   n2: vetor [1..5] de real
   m: vetor [1..5] de real
   mtotal, msala : real
   alacmedia : inteiro

Inicio
   Para c <- 1 ate 5 faca
      Escreva ("Nome do Aluno: ")
      Leia (nome[c])
      Escreva ("Nota da AO1: ")
      Leia (n1[c])
      Escreva ("Nota da AO2: ")
      Leia (n2[c])
      m[c] <- (n1[c] + n2[c]) / 2
      mtotal <- mtotal + m[c]
      Escreval ("-------------------")
      msala <- mtotal / 5
   FimPara
   Limpatela
   Escreval ("MÉDIA DOS ALUNOS")
   Escreval ("-------------------")
   Para c <- 1 ate 5 faca
      Escreval ("Aluno: ", nome[c])
      Escreval ("Média: ",m[c])
      Se (m[c] > msala) entao
         alacmedia <- alacmedia + 1
      FimSe
      Escreval ("-------------------")
   FimPara
   Escreval ("Ao todo ", alacmedia, " alunos ficaram acima da media da sala, que foi de: ", msala:4:1)
   
      


Fimalgoritmo