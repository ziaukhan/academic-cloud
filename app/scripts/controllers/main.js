'use strict';

angular.module('academicCloudApp')
  .controller('MainCtrl', function ($scope, $http, User) {
    /**$http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });*/
    updatePage();
    $scope.$on("loginStatusChanged", function(){
        updatePage();
    });

    function updatePage(){
        if(User.isLoggedIn){
            $scope.message = User.profile.name + " is logged in";
        }
        else {
            $scope.message = "User is not logged in";
        }
    }

  });
