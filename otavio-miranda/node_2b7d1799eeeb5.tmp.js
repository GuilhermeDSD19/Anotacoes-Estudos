let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '')
let cpfArray = Array.from(cpfLimpo)
cpfArray.reduce((ac, val) => {
    let total = 0
    for (let i = 10; i = 2; i--){
        total += Number(val[i])
        console.log(total)
    }
}, 0)
