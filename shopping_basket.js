
var shopping_basket = {
  total_price: 0,
  contents: [{item: "bananas", amount: 100, price: 0.75, bogof: true}, {item: "baked beans", amount: 2, price: 0.60, bogof: true}, {item: "bread", amount: 1, price: 1.20, bogof: false}],
  bill: function() {
    for (i = 0; i < this.contents.length; i++)
      this.total_price += this.contents[i].price * this.contents[i].amount;
    return this.total_price.toFixed(2);
  },
  discount_for_20: function(running_total) {
    this.total_price = running_total;
    if (this.total_price > 20.00) {
      new_total = (this.total_price - (this.total_price / 10));
      return new_total.toFixed(2);
    }
    else return this.total_price.toFixed(2);
  },
  apply_bogof: function(running_total) {
    this.total_price = running_total;
    pairs = 0;
    for (i = 0; i < this.contents.length; i++) {
      if (this.contents[i].amount % 2 === 0)
        pairs = this.contents[i].amount / 2;
      else 
        pairs = (this.contents[i].amount - 1) / 2;
      if (this.contents[i].bogof === true) {
        this.total_price -= (pairs * this.contents[i].price);
      }
    }
    return this.total_price.toFixed(2);
  }
}

module.exports = shopping_basket;