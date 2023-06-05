const fs = require("fs");

const caminho = __dirname + "/arquivo.json";

// sincrono...
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(`\n${conteudo}`) // JSON

// assincrono...
fs.readFile(caminho, "utf-8", (err, data) => {
    const config = JSON.parse(data)

    console.log(`\nreadFile: ${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(`\nrequire padrão: ${config.db.user}`)

fs.readdir(__dirname, (err, arquivos) => {
    console.log(`\nConteúdo da pasta atual... \n ${arquivos}`)
})