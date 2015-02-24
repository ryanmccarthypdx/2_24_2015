studentRoster.controller("FieldTripsCtrl", function FieldTripsCtrl($scope) {
  $scope.studentsWithPermission = function(student) {
    student.permissionSlip = true;
  };
});
