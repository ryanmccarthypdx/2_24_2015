restaurant.controller("IceCreamCtrl", function IceCreamCtrl($scope, ChecksFactory) {
  $scope.ChecksFactory = ChecksFactory;
  $scope.iceCreamOptions = [
    {scoops: "One", price: 2},
    {scoops: "Two", price: 3},
    {scoops: "Three", price: 4}
  ];
  $scope.iceCreams = [];

  $scope.addIceCream = function(iceCream) {
    var newIceCream = { scoops: iceCream.scoops, price: iceCream.price }
    $scope.iceCreams.push(newIceCream);
  }
  $scope.iceCream = $scope.iceCreamOptions[2];
});
