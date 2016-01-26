var shopping_basket = require("./shopping_basket");
var assert =  require("assert");

describe("Shopping basket", function() {
 // 1. We need to find the price of a shopping basket. A shopping basket can have multiple items.
  it("should calculate total price of items in it", function() {
    total = shopping_basket.bill();
    assert.equal(77.40, total);
  }); 
  // 2. 10% discount for all shopping baskets over £20
  it("should apply 10% discount for all shopping baskets over £20", function() {
    total = shopping_basket.discount_for_20();
    assert.equal(69.66, total);
  }); 
  // 3. Certain items are buy one get on free, this should be considered.
  it("should consider BOGOF items when calcalating total", function() {
    shopping_basket.apply_bogof();
    assert.equal(69.06, total);
  }); 
  // 4. If the customer has a valid discount card then they get and additional 5% off.
});
