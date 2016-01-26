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
    total_after_discount = shopping_basket.discount_for_20(total);
    assert.equal(69.66, total_after_discount);
  }); 
  // 3. Certain items are buy one get on free, this should be considered.
  it("should consider BOGOF items when calcalating total", function() {
    bogof_total = shopping_basket.apply_bogof(total_after_discount);
    assert.equal(31.56, bogof_total);
  }); 
  // 4. If the customer has a valid discount card then they get and additional 5% off.
  it("should apply additional 5% discount if basket has discount card", function() {
    discount_card_total = shopping_basket.apply_card_discount(bogof_total);
    assert.equal('29.98', discount_card_total); // £1.58 discount on £31.56
  }); 
});
