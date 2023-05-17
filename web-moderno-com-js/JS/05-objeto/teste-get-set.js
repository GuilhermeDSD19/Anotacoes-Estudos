class Example {
    constructor() {
      this._property = "default value"
    }
  
  
  // O get é utilizado somente para acessar os valores sem alterar o seu conteudo.
    get property() {
      return this._property
    }
  
  // O set permiti acessar os valores e altera-los. 
    set property(value) {
      this._property = value
    }
  }
  
  let example = new Example()
  console.log(example.property) // "default value"
  example.property = "new value"
  console.log(example.property) // "new value"