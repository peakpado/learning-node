/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    var app = angular.module("onlineClassScheduler",
           ["common.services",
            "common.directives",
            "ngRoute",
            "ngMessages",
            "classResourceMock"]);

    app.config(["$routeProvider",
            function ($routeProvider) {
                $routeProvider
                    .when("/", {
                        templateUrl: "app/welcomeView.html"
                    })
                    .when("/classList", {
                        templateUrl: "app/classes/classListView.html",
                        controller: "ClassListCtrl as vm"
                    })
                    .when("/classEdit/:classId", {
                        templateUrl: "app/classes/classEditView.html",
                        controller: "ClassEditCtrl as vm",
                        resolve: {
                            selectedClass: function (classResource, $route) {
                                var classId = $route.current.params.classId;
                                return classResource.get({ classId: classId }).$promise;
                            }
                        }
                    })
                    .otherwise({
                        redirectTo: "/"
                    })
            }]);
    app.run(['$rootScope', function ($rootScope) {
        console.log('$rootScope:', $rootScope);
        $rootScope.myProperty = 'this is a test property in rootScope';
    }]);
}());