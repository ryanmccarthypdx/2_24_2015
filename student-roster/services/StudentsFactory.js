studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];

  factory.addStudent = function() {
    var student = { name: factory.studentName, permissionSlip: false };
    factory.students.push(student);
    factory.studentName = null;
  };

  factory.deleteStudent = function(student) {
    factory.students.splice((factory.students.indexOf(student)), 1);
  };
  return factory;
});
