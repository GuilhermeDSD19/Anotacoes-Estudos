let varA = 'A';  // B --
let varB = 'B';  // C
let varC = 'C';  // A

let auxiliar = varA // auxiliar = A

varA = varB // varA = B
varB = varC // varB = C
varC = auxiliar // varC = A


console.log(varA, varB, varC);

