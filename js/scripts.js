$(document).ready(function() {
  // Deck of Cards
  $("#make-deck").click(function() {
    var values = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
    var suits = ["hearts", "diamonds", "spades", "clubs"];
    var cards = [];

    $("#cardList").empty();
      suits.forEach(function(suit) {
        values.forEach(function(value) {
            cards.push(value + " of " + suit);
            $("#cardList").append("<li>" + value + " of " + suit + "</li>");
            console.log(value + " of " + suit);
      });
    });
  })
  // GROCERY FORM
  $("#groceryForm").submit(function(event) {
    var groceryList = $("#list").val()
    var groceryArray = groceryList.split(", ");
    groceryArray.sort();
    console.log(groceryArray)
    var groceryCap = groceryArray.map(function(word) {
      return word.toUpperCase();
    });
    event.preventDefault();
    console.log(groceryCap)
    $("#groceryList").empty();
    groceryCap.forEach(function(word){
      $("#groceryList").append("<li>" + word + "</li>");
    });
    $("#groceryForm").hide();
  });

  // WORD COUNT
  $("#words-form").submit(function(event){
    event.preventDefault();
    var wordList = $("#words").val();
    var wordArray = wordList.split(" ");
    // console.log(wordArray);

    var words = [];
    var counts = [];
    wordArray.forEach(function(word) {
      var index = words.indexOf(word);
      if(index === -1) {
        words.push(word);
        counts.push(1);
      } else {
        counts[index] += 1
      }
      // console.log(word, index, words, counts);
    });
    $("#countList").empty();
    words.forEach(function(word, index){
      var count = counts[index];
      console.log(word, index, count);
      $("#countList").append("<li>" + word + " " + count +  "</li>");
    });
  });
});
