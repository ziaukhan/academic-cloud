'use strict';

angular.module('academicCloudApp')
  .controller('NavbarCtrl', function ($scope, $location, $FB, User) {
        updateLoginStatus(updateApiMe);

        $scope.login = function () {
            $FB.login(function (res) {
                /**
                 * no manual $scope.$apply, I got that handled
                 */
                if (res.authResponse) {
                    updateLoginStatus(updateApiMe);
                }
            }, {scope: 'email,user_likes'});
        };

        $scope.logout = function () {
            $FB.logout(function () {
                updateLoginStatus(updateApiMe);
            });
        };

        function updateLoginStatus (more) {
            $FB.getLoginStatus(function (res) {
                $scope.loginStatus = res;
                User.loginStatus = res;
                if(res.status === "connected"){
                    User.isLoggedIn = true;
                }
                else {
                    User.isLoggedIn = false;
                }
                (more || angular.noop)();
            });
        }

        function updateApiMe () {
            $FB.api('/me', function (res) {
                User.profile = res;
            });
        }
  });
