
$( document ).ready(function() {

//Take the WIZQUiz button, INDEX
$("button").click(function() {
	$("#quiz").show();
	$("button").hide();
	});




$("input.btn.btn-info").click(function() {
	$("#income").on("click", function() {
   var incomeValue = this.value; // omit "var" to make it global

console.log("incomeValue");
});
 $("#quiz").hide();

	});





	//input.btn.btn-info ---when submitted, log information accordingly//




console.log( "ready!" );
});//END ready






//
// function calculate() {
//   var income = document.question1.value;
//         var calc_housing = income*.24;
//         document.quizPrintOut.housing.value = calc_housing;
//         var calc_food = income*.14;
//         document.quizPrintOut.food.value = calc_food;
//         var calc_util = income*.10;
//         document.quizPrintOut.utilities.value = calc_util;
//   });

//
//
//
// 	function getIncome () {
// 	  var income = prompt('Household Monthly Income?');
// 	  return income * .24;
// 	}
//
//
// 	income();
//
//
// 	function getHousehold () {
// 	  var household = prompt('How many people dwell in said household?');
// 	  if (household > 2) {
// 	    return income * .08;
// 	    alert("Utilities: )}
// 	  }
//
// 	function getDebt () {}
//
// 	function getSpend () {}
//
//
//
//   //hide question
// // $(".question1").hide();
// //Convert Input to numbers, multiply INCOME INPUT by .24 (24%), print in .housing
// //slide off when submit button clicked
// //hide question
//
// //slide second question in
// // $(".question2").hide();
// //Convert input to numbers, if answer is LESS THAN OR EQUAL TO 2:
//     // multiply INCOME INPUT by .06 (6%) for .health;
//     //.12 (12%)  for .car;
//     // if answer is GREATER THAN 2:
//     //multiply INCOME INPUT by .09 (9%) for .health;
//     //.10 (10%) for .car;
//     //print in .health and .car
//   //if radio button is YES, multiply INCOME INPUT by .10 (10%) for .debt, .06 (6%) for .save
//     //if NO, multiply INCOME INPUT by .06(6%) for .debt, .10 (10%) for .save
//     //Print in .save and .debt
//   //slide off when submit button clicked
//   //hide question
//
// $(".question4").hide();
// //slide fourth question in
//   //If frugal button selected, multiply INCOME INPUT by .06 (6%) for .fun and .11 (11%) for .other
//   //IF fancy is selected, multiply INCOME INPUT by .11(11%) for .fun and .06(6%) for .other
//   //Print in .fun and .other
//   //slide off when submit button clicked
//   //hide question
//
// $(".results").hide();
// //Show completed form
// //Hide results
// $(".results").hide();
// //add button
// $(".results").append("<button>Show me the money!</button>");
// //when button pressed
// $(.button)click(function(){
//   $("p").show();
//   $(this).remove();
// }); //show results
//   //get rid of button
