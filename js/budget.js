
var income = prompt('Household Monthly Income?');
if ( income === ) {
    document.write('HOUSING:' + income*.24');
} else {
  document.write('HOUSING:' + income*.24');}

var household = prompt("How many people dwell in said household?");

var debt = prompt('Little debt or lots of debt?');//add check boxes, little or lots
if ( debt.toUpperCasease === LITTLE) {
  document.write('<p>SAVINGS: ' + income*.10 </p>'); }
 else { document.write('<p>DEBTS: ' + income*.05</p>');
}
if (debt.toUpperCasease === LOTS) {
  document.write('<p>SAVINGS: ' + income*.05</p>');}
 else { document.write('<p>DEBTS: ' + income*.10</p>');
}

var frugal = prompt('Are you frugal or fancy?'); //add check boxes, frugal or fancy
if (frugal.toUpperCase === FRUGAL) {
  document.write ('<p>Fun:' + income*.05 </p>');}
    else { document.write('<p>Fun: + income*.09 </p>');
}

//poor & rich, poor w/ kids, (flip savings/debts and fun/other)
//document.write('HOUSING: 25%/ 24');
//document.write('UTILITIES:10/ 10 ');
//document.write('FOOD:14/  15');
//document.write('CAR:12/  10');
//document.write('HEALTH:6/ 9 ');
//document.write('FUN:7/  6');
//document.write('SAVINGS:10/ 10 ');
//document.write('DEBTS:6/ 5 ');
//document.write('OTHER:10/ 11 ')

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
