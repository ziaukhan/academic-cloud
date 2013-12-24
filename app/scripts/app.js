'use strict';

angular.module('academicCloudApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ezfb'
])
    .config(function ($routeProvider, $locationProvider, $FBProvider) {
        $FBProvider.setInitParams({
            appId: '239639062864088'
        });

        $routeProvider
          .when('/', {
            templateUrl: 'partials/main',
            controller: 'MainCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
        $locationProvider.html5Mode(true);

    })
    .factory("User", function(){
        var user = {
            isLoggedIn: false,
            loginStatus: null,
            profile: null
        }
        return user;
    })
