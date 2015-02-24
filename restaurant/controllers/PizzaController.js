restaurant.controller('PizzaCtrl', function PizzaCtrl($scope, ChecksFactory) {
  $scope.ChecksFactory = ChecksFactory;
  $scope.pizzaOptions = [
    {size: "small", price: 8},
    {size: "medium", price: 10},
    {size: "large", price: 12}
  ];
  $scope.pizzas = [];

  $scope.addPizza = function(pizza) {
    var newPizza = { size: pizza.size, price: pizza.price }
    $scope.pizzas.push(newPizza);
  }
  $scope.pizza = $scope.pizzaOptions[2];
});
