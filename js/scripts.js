$(document).ready(function() {
  $("#make-deck").click(function() {
    var values = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
    var suits = ["hearts", "diamonds", "spades", "clubs"];
    var cards = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
        cards.push(value + " of " + suit);
        console.log(value + " of " + suit);
      });
    });
  })
});
