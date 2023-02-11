Algoritmo "MelhorAproveitamento"


Var
     nome, melhor_aluno : caractere
     nota, maior_nota : real
     n_alunos, loop : inteiro


Inicio

      loop <- 1
      Escreval ("------------------------")
      Escreval ("ESOLA SANTA PACIENCIA")
      Escreval ("------------------------")
      Escreva ("Quantos alunos a turma tem? ")
      Leia (n_alunos)
      Enquanto (loop < n_alunos + 1 ) faca
               Escreval ("------------------------")
               Escreval ("Aluno ", loop)
               Escreva ("Nome do aluno: ")
               Leia (nome)
               Escreva ("Nota: ")
               Leia (nota)
               Se (nota > maior_nota) entao
                  maior_nota <- nota
                  melhor_aluno <- nome
               FimSe
               loop <- loop + 1
      FimEnquanto
      
      Escreval ("-----------------------------------------------------------------")
      Escreva ("O melhor aproveitamento foi do aluno: ", melhor_aluno, " com a nota ", maior_nota)


      
Fimalgoritmo