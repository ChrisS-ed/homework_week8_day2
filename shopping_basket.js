
var shopping_basket = {
  total_price: 0,
  contents: [{item: "bananas", amount: 100, price: 0.75, bogof: false}, {item: "baked beans", amount: 2, price: 0.60, bogof: true}, {item: "bread", amount: 1, price: 1.20, bogof: false}],
  bill: function() {
    for (i = 0; i < this.contents.length; i++)
      this.total_price += this.contents[i].price * this.contents[i].amount;
    return this.total_price;
  },
  discount_for_20: function(running_total) {
    this.total_price = running_total;
    if (this.total_price > 20.00) {
      new_total = (this.total_price - (this.total_price / 10)).toFixed(2);
      return new_total;
    }
    else return this.total_price;
  },
  apply_bogof: function(running_total) {
    this.total_price = running_total;
    pairs = 0;
    for (i = 0; i < this.contents.length; i++) {
      if (this.contents[i].amount % 2 === 0)
        pairs = this.contents[i].amount / 2;
      else 
        pairs = (this.contents[i].amount - 1) / 2;
      console.log(pairs);
      if (this.contents[i].bogof === true) {
        console.log("BOGOF? " + this.contents[i].bogof);
        console.log("Price before: " + this.total_price);
        this.total_price -= (pairs * this.contents[i].price);
        console.log("Price after: " + this.total_price);
      }
    }
    console.log("Final price: " + this.total_price);
    return this.total_price;
  }
}

module.exports = shopping_basket;