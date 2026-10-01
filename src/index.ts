import express from "express";
const app = express();

const products = [
  { id: 1, name: "Keyboard", category: "accessories", price: 150000 },
  { id: 2, name: "Mouse", category: "accessories", price: 75000 },
  { id: 3, name: "Monitor", category: "display", price: 2000000 },
];

app.get("/products", (_req, res) => res.json(products));

// BUG sengaja: memakai id sebagai index array
app.get("/products/:id", (req, res) => {
  const product = products[Number(req.params.id)];
  res.json({ name: product.name, price: product.price });
});

app.listen(3000, () => console.log("Running on :3000"));
