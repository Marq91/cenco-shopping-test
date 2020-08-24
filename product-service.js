const products = [
  { code: "BT", name: "blue t-shit", price: 100, discount: 20 },
  { code: "RT", name: "red t-shit", price: 100, discount: 0 },
  { code: "BJX", name: "blue jeans X", price: 100, discount: 5 },
  { code: "BJY", name: "blue jeans Y", price: 100, discount: 30 },
  { code: "BJZ", name: "blue jeans Z", price: 100, discount: 0 },
];

const getAllProduct = () => products;

const getProductByCode = (code) =>
  products.find((product) => product.code == code); // Error-> req.params.code

const handleProductCodes = (productList) => {
  try {
    const codesList = productList.map(product => product.code);
    return codesList
  } catch (error) {
    console.error(error)
    return false
  }
};

const handleTotals = (productList) => {
  let total = 0;
  productList.map(product => (total += product.price));
  const discounts = productList.map(product => product.discount);
  const totalDiscount = discounts.reduce((acc, element) => acc + element, 0);
  const totalToPay = total - totalDiscount;

  return {
    total: total,
    totalDiscount: totalDiscount,
    totalToPay: totalToPay
  }
};

module.exports = { 
  getAllProduct, 
  getProductByCode, 
  handleProductCodes,
  handleTotals
};
