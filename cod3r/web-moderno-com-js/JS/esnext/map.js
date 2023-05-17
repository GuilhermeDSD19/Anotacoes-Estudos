const map = new Map([
    ["chave1", "valor1",]
]);

// Definindo pares chave/valor
map.set(42, "valor2");
map.set(true, "valor3");

// Recuperando valores por chave
console.log(map.get("chave1")); // Saída: "valor1"
console.log(map.get(42)); // Saída: "valor2"
console.log(map.get(true)); // Saída: "valor3"

// Verificando a existência de uma chave
console.log(map.has("chave1")); // Saída: true
console.log(map.has(99)); // Saída: false

// Removendo um par chave/valor
map.delete(42);

// Verificando o tamanho do Map
console.log(map.size); // Saída: 2

// Iterando sobre os pares chave/valor
map.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`);
});
