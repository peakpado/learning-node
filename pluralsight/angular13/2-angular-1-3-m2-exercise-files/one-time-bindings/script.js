// Code goes here

/*

*/

angular.module('app', ['ngRoute']).config(function($routeProvider) {
  $routeProvider.when('/classes', {
    id: 'classes',
    templateUrl: 'classes.html',
    controller: 'classesCtrl'
  }).when('/students', {
    id: 'students',
    templateUrl: 'students.html',
    controller: 'studentsCtrl'
  }).otherwise('/classes')
})

angular.module('app').directive('classDisplay', function() {
  return {
    template: '<input type="text" ng-model="name" /> {{name}}',
    scope: {
      name: '='
    }
  }
})

angular.module('app').controller('mainCtrl', function($scope, $rootScope, classes, students) {
  $scope.classes = classes.classList;
  $scope.students = students.studentList;
});
angular.module('app').controller('classesCtrl', function($scope) {
});
angular.module('app').controller('studentsCtrl', function($scope) {
  
});