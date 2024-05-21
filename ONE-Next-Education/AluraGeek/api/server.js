const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.post("/produtos", (req, res) => {
  const novoProduto = req.body;
  router.db.get("produtos").push(novoProduto).write();
  res.send(novoProduto);
});

// Ruta para obtener todos los productos
server.get("/produtos", (req, res) => {
  const productos = router.db.get("productos").value();
  res.send(productos);
});

server.put("/produtos/:id", (req, res) => {
  const idProduto = req.params.id;
  const newData = req.body;
  router.db.get("produtos").find({ id: idProduto }).assign(newData).write();
  res.sendStatus(200);
});

server.delete("/produtos/:id", (req, res) => {
  const idProduto = req.params.id;
  router.db.get("produtos").remove({ id: idProduto }).write();
  res.sendStatus(200);
});

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
