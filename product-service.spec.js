const { 
  getAllProduct, 
  getProductByCode,   
  handleProductCodes,
  handleTotals
} = require("./product-service");

const products = [
  { code: "BT", name: "blue t-shit", price: 100, discount: 20 },
  { code: "RT", name: "red t-shit", price: 100, discount: 0 },
  { code: "BJX", name: "blue jeans X", price: 100, discount: 5 },
  { code: "BJY", name: "blue jeans Y", price: 100, discount: 30 },
  { code: "BJZ", name: "blue jeans Z", price: 100, discount: 0 },
];

describe("product-service", () => {
  it("should return all products", () => {
    expect(getAllProduct().length).toBe(5);
  });

  it("should return a product by code", () => {
    const product = getProductByCode("RT");
    const productTest = { 
      code: "RT", 
      name: "red t-shit", 
      price: 100, 
      discount: 0 
    }
    expect(product).toEqual(productTest);
  });

  it("should return list of product codes", () => {
    const codes = handleProductCodes(products);
    const codeListTest = ["BT", "RT", "BJX", "BJY", "BJZ"];
    expect(codes).toEqual(codeListTest);
    expect(typeof codes).toBe('object');
  });
  
  it('should return an object with totals', () => {
    const totals = handleTotals(products);
    const productTotalsTest = { 
      total: 500, 
      totalDiscount: 55, 
      totalToPay: 445
    };
    expect(totals).toEqual(productTotalsTest);
  });
  
});
