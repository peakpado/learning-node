// Code goes here

angular.module('app', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider.when('/classes/:classIdx', {
    id: 'classes',
    templateUrl: 'classes.html',
    controller: 'classesCtrl'
  }).when('/students', {
    id: 'students',
    templateUrl: 'students.html',
    controller: 'studentsCtrl'
  }).otherwise('/classes/0')
})

angular.module('app')
.controller('mainCtrl', function($scope, classes, students) {
  $scope.classes = classes.classList;
  $scope.students = students.studentList;
});

angular.module('app')
.controller('classesCtrl', function($scope, $routeParams, $route) {
  console.log('classesCtrl: ---', $routeParams);

  $scope.classIdx = $routeParams.classIdx;
  $scope.$watch('classIdx', function(newIdx) {
    $scope.currentClass = $scope.classes[newIdx];
  })
  $scope.updateRoute = function() {
    $route.updateParams({classIdx:$scope.classIdx}); //this causes reload route
  }
});
angular.module('app').controller('studentsCtrl', function($scope) {
  
});