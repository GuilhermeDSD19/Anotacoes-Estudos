algoritmo "DetectorPesado"

var
  I: Inteiro
  N, Pesado: Caractere
  P, Mai: Real
  
Procedimento topo ()
Inicio
  LimpaTela
  EscrevaL("------------------------------------")
  EscrevaL(" D E T E C T O R   DE   P E S A D O ")
  EscrevaL(" Maior Peso ate agora: ", Mai, "Kg")
  EscrevaL("------------------------------------")
FimProcedimento

inicio

  Topo()
  Para I <- 1 ate 2 faca
     Escreva("Digite o nome: ")
     Leia(N)
     Escreva("Digite o peso de ",N, ": ")
     Leia (p)
     Se (P > Mai) entao
        MAI <- P
        Pesado <- N
     FimSe
  Topo ()
  FimPara
  Topo ()
  EscrevaL("A pessoa mais pesada foi ",Pesado, ", com ", Mai, " quilos.")
fimalgoritmo
