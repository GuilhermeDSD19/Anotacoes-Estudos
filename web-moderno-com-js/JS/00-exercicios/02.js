function tipoDoTriangulo (x, y, z) {
    if (x == y && y == z && x == z) {
        console.log(`Esse triangulo é Equilátero (Possui três lados iguais )`)
    } else if (x !== y && y !== z && x !== z) {
        console.log(`Esse triangulo é Escaleno (Não possui lados iguais )`)
    } else {
        console.log(`Esse triangulo é Isósceles (Possui dois lados iguais )`)
    }
}

tipoDoTriangulo(10, 10, 10)