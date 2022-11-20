let amigo = {nome: 'Jose', Sexo: 'M', peso: 85.4, engordar(p=0){ console.log('Engordou'), this.peso += p }}

amigo.engordar(4)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)