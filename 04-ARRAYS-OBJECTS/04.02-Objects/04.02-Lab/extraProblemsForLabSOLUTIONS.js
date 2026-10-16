// 6
product.tiers = [
  { minQty: 1, unitPrice: 75 },
  { minQty: 5, unitPrice: 60 },
  { minQty: 10, unitPrice: 50 },
];
product.getUnitPriceFor = function (qty) {
  if (qty >= this.tiers[2].minQty) return this.tiers[2].unitPrice;
  if (qty >= this.tiers[1].minQty) return this.tiers[1].unitPrice;
  return this.tiers[0].unitPrice;
};

// 7
product.sellChecked = function (qty) {
  if (!Number.isInteger(qty) || qty < 1) {
    return "Quantity must be a whole number of at least 1.";
  }
  return this.sell(qty);
};

// 8
product.stock = 3;
product.soldOut = false;
product.sell = function (qty) {
  if (this.soldOut) {
    return `Sorry, the ${this.prodName} is sold out.`;
  }
  if (qty > this.stock) {
    return `Only ${this.stock} left. Please order ${this.stock} or fewer.`;
  }
  this.stock -= qty;
  if (this.stock === 0) {
    this.soldOut = true;
  }
  return `Sold ${qty}. ${this.stock} left in stock.`;
};

// 9
product.cloneAs = function (newName) {
  return {
    prodName: newName,
    buzzwords: this.buzzwords.slice(),
    company: this.company,
  };
};

// 10
product.report = function () {
  let status = this.soldOut ? "SOLD OUT" : `${this.stock} in stock`;
  return `${this.prodName} | ${status} | MSRP $${this.msrp} | 10+ units: $${this.getUnitPriceFor(10)} each`;
};

console.log(product.getUnitPriceFor(1));
console.log(product.getUnitPriceFor(5));
console.log(product.getUnitPriceFor(9));
console.log(product.getUnitPriceFor(10));
console.log(product.getUnitPriceFor(25));
console.log(product.sellChecked("2"));
console.log(product.sellChecked(0));
console.log(product.sellChecked(1.5));
console.log(product.sellChecked(2));
let copy = product.cloneAs("Mini Widget");
copy.buzzwords.push("tiny");
console.log(product.buzzwords.length);
let badCopy = { buzzwords: product.buzzwords };
badCopy.buzzwords.push("bad");
console.log(product.buzzwords.length);
console.log(product.report());