angular.module('budgetWizApp')
.directive('income', function(){
    return {
      template: "What is your monthly income?",

    };

  .directive('householdSize', function(){
    return {
      template: "How many people reside in your household?",

    };

    .directive('debt', function(){
    return {
      template: "Do you have a lot of debt?",

    };

      .directive('frugalFancy', function(){
    return {
      template: "Are you frugal or fancy",

    };
});
