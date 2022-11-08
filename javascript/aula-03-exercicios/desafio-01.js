let nota1 = 10;
let nota2 = 0;
let nota3 = 0;
let media = (nota1 + nota2 + nota3) / 3;

if (media > 7){
    console.log("Nota: ", media.toFixed(2), "(APROVADO)");
}
else if (media >= 5 ){
    console.log("Nota: ", media.toFixed(2), "(RECUPERAÇÃO)");
}
else{
    console.log("Nota: ", media.toFixed(2), "(REPROVADO)");
}
