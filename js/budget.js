//hide quiz div
$(".quiz").hide();

//when take wiz quiz button is clicked, hide button and #wrapper

//slide quizButton off and show first question
$(.quizButton).click(function() {});

});
  //slide off when submit button clicked

  //hide question
$(".question1").hide();
//Convert Input to numbers, multiply INCOME INPUT by .24 (24%), print in .housing
//slide off when submit button clicked
//hide question

//slide second question in
$(".question2").hide();
//Convert input to numbers, if answer is LESS THAN OR EQUAL TO 2:
    // multiply INCOME INPUT by .06 (6%) for .health;
    //.12 (12%)  for .car;
    // if answer is GREATER THAN 2:
    //multiply INCOME INPUT by .09 (9%) for .health;
    //.10 (10%) for .car;
    //print in .health and .car
    //ALSO--
    //regardless of answer, multiply INCOME INPUT by .14 (14%) for .food,
    //and .10 (10%) for utilities
    //print in .food and .utilities
  //slide off when submit button clicked
  //hide question

$(".question3").hide();
//slide third question in
  //if radio button is YES, multiply INCOME INPUT by .10 (10%) for .debt, .06 (6%) for .save
    //if NO, multiply INCOME INPUT by .06(6%) for .debt, .10 (10%) for .save
    //Print in .save and .debt
  //slide off when submit button clicked
  //hide question

$(".question4").hide();
//slide fourth question in
  //If frugal button selected, multiply INCOME INPUT by .06 (6%) for .fun and .11 (11%) for .other
  //IF fancy is selected, multiply INCOME INPUT by .11(11%) for .fun and .06(6%) for .other
  //Print in .fun and .other
  //slide off when submit button clicked
  //hide question

$(".results").hide();
//Show completed form
//Hide results
$(".results").hide();
//add button
$(".results").append("<button>Show me the money!</button>");
//when button pressed
$(.button)click(function(){
  $("p").show();
  $(this).remove();
}); //show results
  //get rid of button
