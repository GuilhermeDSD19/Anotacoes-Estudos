function tratarErroELancar(erro) {
   // throw new Error('...')
   // throw 10
   // throw true
   // throw 'menssagem'
   throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
   }
}
function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Final")
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)