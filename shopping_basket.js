
var shopping_basket = {
  total_price: 0,
  contents: [{item: "bananas", amount: 1, price: 0.75}, {item: "baked beans", amount: 2, price: 0.60}, {item: "bread", amount: 1, price: 1.20}],
  bill: function() {
    for (i = 0; i < this.contents.length; i++)
      this.total_price += this.contents[i].price * this.contents[i].amount;
    return this.total_price;
  }
}

module.exports = shopping_basket;