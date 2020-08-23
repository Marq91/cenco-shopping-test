const express = require("express");
const bodyParser = require("body-parser");
const { getAllProduct, getProductByCode } = require("./product-service");

const app = express();
app.use(bodyParser.json());

app.get("/product", (req, res) => {
  res.json(getAllProduct());
});

app.get("/product/:code", (req, res) => {
  const product = getProductByCode(req.params.code);
  if (!product) return res.status(404).send("Product not found");
  res.json(product);
});

//Need to calculate total and discount
app.post("/checkout", (req, res) => {
  // solo obtener los productos que se compraran (req.body)
  const codes = handleProductCodes(req.body); 
  const totals = handleTotals(req.body);
  
  const result = {
    total: totals.total,
    totalDiscount: totals.totalDiscount,
    totalToPay: totals.totalToPay,
    product: codes,
  };
  res.json(result);
});

function handleProductCodes(products) {
  const codesList = products.map(product => product.code);
  return codesList
}

function handleTotals(products) {
  let total = 0;
  products.map(product => (total += product.price));

  const discounts = products.map(product => product.discount);
  const totalDiscount = discounts.reduce((acc, element) => acc + element, 0);

  const totalToPay = total - totalDiscount;

  return {
    total: total,
    totalDiscount: totalDiscount,
    totalToPay: totalToPay
  }
}

app.listen(3000);
console.log("Express started on port 3000");
