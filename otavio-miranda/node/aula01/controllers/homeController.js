exports.paginainicial = (req, res) => {
    res.send(`
    <form action ="/" method="POST">
    Nome do Cliente: <input type="text" name="qualquercoisa"><br>
    Outro campo: <input type="text" name="aquioutrocampo">
    <button>Olá mundo</button>
    </form>
    `);
};

exports.tratarPost = (req, res) => {
    res.send('Ei, sou sua nova rota de post')
}