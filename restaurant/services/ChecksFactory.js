restaurant.factory('ChecksFactory', function ChecksFactory() {
  var factory = {};

  factory.total = function(items) {
    var total = 0;
    items.forEach(function(item) {
      total += item.price;
    });
    return total.toFixed(2);
  }
  return factory;
});
