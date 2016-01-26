
var shopping_basket = {
  totalPrice: 0,
  contents: [{item: "bananas", amount: 100, price: 0.75, bogof: true}, {item: "baked beans", amount: 2, price: 0.60, bogof: true}, {item: "bread", amount: 1, price: 1.20, bogof: false}],
  discount_card: true,
  bill: function() {
    for (i = 0; i < this.contents.length; i++)
      this.totalPrice += this.contents[i].price * this.contents[i].amount;
    return this.totalPrice.toFixed(2);
  },
  discount_for_20: function(running_total) {
    this.totalPrice = running_total;
    if (this.totalPrice > 20.00) {
      new_total = (this.totalPrice - (this.totalPrice / 10));
      return new_total.toFixed(2);
    }
    else return this.totalPrice.toFixed(2);
  },
  apply_bogof: function(running_total) {
    this.totalPrice = running_total;
    pairs = 0;
    for (i = 0; i < this.contents.length; i++) {
      if (this.contents[i].amount % 2 === 0)
        pairs = this.contents[i].amount / 2;
      else 
        pairs = (this.contents[i].amount - 1) / 2;
      if (this.contents[i].bogof === true) {
        this.totalPrice -= (pairs * this.contents[i].price);
      }
    }
    return this.totalPrice.toFixed(2);
  },
  apply_card_discount: function(running_total) {
    this.totalPrice = parseFloat(running_total);
    if (this.discount_card === true) {
      discount = this.totalPrice * (5/100);
      this.totalPrice -= discount;
    }
    return this.totalPrice.toFixed(2);
  }
}

module.exports = shopping_basket;