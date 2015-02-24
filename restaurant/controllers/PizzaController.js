restaurant.controller('PizzaCtrl', function PizzaCtrl($scope, ChecksFactory) {
  $scope.pizzaOptions = [
    {size: "small", price: 8},
    {size: "medium", price: 10},
    {size: "large", price: 12}
  ];
  
});
