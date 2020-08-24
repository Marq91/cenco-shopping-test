const express = require("express");
const bodyParser = require("body-parser");
const { 
  getAllProduct, 
  getProductByCode,
  handleProductCodes,
  handleTotals
} = require("./product-service");

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
  // Obtiene los productos que vienen en el body
  const codes = handleProductCodes(req.body); 
  if (!codes) {
    return res.status(400).json({
      ok: false,
      error: "Product Codes not found"
    })
  };

  const totals = handleTotals(req.body);
  
  const result = {
    total: totals.total,
    totalDiscount: totals.totalDiscount,
    totalToPay: totals.totalToPay,
    product: codes,
  };
  res.json(result);
});

app.listen(3000);
console.log("Express started on port 3000");
