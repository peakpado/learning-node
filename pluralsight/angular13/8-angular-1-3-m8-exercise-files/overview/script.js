// Code goes here

angular.module('app', ['ngRoute', 'ngAnimate']).config(function($routeProvider) {
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

angular.module('app').directive('selectable', function($animate) {
  return function(scope, element, attrs) {
    element.on('click', function() {
      if(element.hasClass('selected')) {
        $animate.removeClass(element, 'selected');
      } else {
        $animate.addClass(element, 'selected');
      }
      scope.$digest();
    })
  }
})

angular.module('app').controller('mainCtrl', function($scope, classes, students) {
  $scope.classes = classes.classList;
  $scope.students = students.studentList;
});
angular.module('app').controller('classesCtrl', function($scope) {
});
angular.module('app').controller('studentsCtrl', function($scope) {
  
});