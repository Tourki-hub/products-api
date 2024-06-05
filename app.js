const express = require("express");
const products = require("./Data");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send(products);
});
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => {
    return product.id == id;
  });
  if (product) return res.jason(product);
  else {
    return res.json("No Id found");
  }
});
app.post("/products", (req, res) => {
  products.push(req.body);
  return res.json(products);
});

app.listen(8000, () => {
  console.log("I'm running at port 8000");
});
