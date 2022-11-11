Algoritmo "Reserva de Cinema"

Var
   b : vetor [1..19] de caractere
   i, cad : inteiro
   r : caractere

Procedimento MostraFileira()

var
   i: inteiro
   
Inicio

   Para i <- 1 ate 10 faca
      Se (B[i] = "") entao
         Escreva ("[ B", i:2, " ]")
      senao
         Escreva ("[ --- ]")
      FimSe
   FimPara
   EscrevaL()
   EscrevaL("------------------------------------------------------------------------")
FimProcedimento

Inicio
   Repita
      LimpaTela
      MostraFileira ()
      Escreva ("Reservar a cadeira: B")
      Leia (cad)
      Se (b[cad]="") entao
         B[cad] <- "X"
         Escreval ("Cadeira B", cad, " RESERVADA!")
      Senao
         Escreval ("ERRO: Lugar Ocupado!")
      FimSe
      Escreva ("Quer reservar outro? [S/N] ")
      Leia (r)
   Ate (r = "N")

Fimalgoritmo