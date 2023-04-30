let corUsuario = null
let corPadrao = "red"
console.log(corUsuario || corPadrao) // corPadrao

let falaOi = _ => console.log("oi") 
let vaiExecutar = true
vaiExecutar && falaOi()

console.log(0 || "" || false || "string" || undefined)