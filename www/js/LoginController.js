angular.module('starter.controllers')
  .controller('LoginController', ['$scope', '$rootScope', '$state', '$ionicHistory', '$ionicPopup', '$auth', function ($scope, $rootScope, $state, $ionicHistory, $ionicPopup, $auth) {
    $scope.user = {
      email: '',
      password: '',
      displayName: ''
    };

    if ($auth.isAuthenticated()) {
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $state.go('app.profile');
    }

    $scope.authenticate = function (provider) {
      $auth.authenticate(provider).then(function () {
        $ionicPopup.alert({
          title: 'Success',
          content: 'You have successfully logged in!'
        }).then(function () {
          $ionicHistory.nextViewOptions({
            disableBack: true
          });
          $state.go('app.profile');
        })
      })
        .catch(function (response) {
          $ionicPopup.alert({
            title: 'Error',
            content: response.data ? response.data || response.data.message : response
          })

        });
    };

    $scope.login = function () {
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $state.go('app.profile');
      return;
      if ($scope.user.email.length == 0 && $scope.user.password.length == 0) {
        $ionicPopup.alert({
          title: 'Error',
          content: 'Please enter your email and password'
        });
      } else if ($scope.user.email.length == 0) {
        $ionicPopup.alert({
          title: 'Error',
          content: 'Please enter your email'
        });
      } else if ($scope.user.password.length == 0) {
        $ionicPopup.alert({
          title: 'Error',
          content: 'Please enter your password'
        });
      } else {
        $auth.login($scope.user).then(function () {
          $ionicPopup.alert({
            title: 'Success',
            content: 'You have successfully logged in!'
          }).then(function () {
            $ionicHistory.nextViewOptions({
              disableBack: true
            });
            $state.go('app.profile');
          });
        }).catch(function (response) {
          $ionicPopup.alert({
            title: 'Error',
            content: 'Wrong email and/or password'
          });
        });
      }

    };

    $scope.register = function () {
      $auth.signup($scope.user).then(function () {
        $ionicPopup.alert({
          title: 'Success',
          content: 'You have successfully registered!'
        }).then(function (res) {
          $state.go('app.profile');
        });
      }).catch(function (response) {
        $ionicPopup.alert({
          title: 'Error',
          content: "Email already exists"
        })
      });
    };

    $scope.logout = function () {
      $auth.logout();
      window.location.reload();
    };

    $scope.isAuthenticated = function () {
      return $auth.isAuthenticated();
    };

  }])
