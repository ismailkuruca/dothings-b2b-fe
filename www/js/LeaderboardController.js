angular.module('starter.controllers')
  .controller('LeaderboardController', ['$scope', '$rootScope', '$state', '$ionicPopup', '$ionicActionSheet', function ($scope, $rootScope, $state, $ionicPopup, $ionicActionSheet) {
    $scope.i = 23;
    $scope.j = 4;

    $scope.individual = [];
    $scope.team = [];

    $scope.moreIndividual = true;
    $scope.moreTeam = true;

    $scope.loadMoreIndividual = function () {
      for(var i = 0; i < 10; i++) {
        $scope.individual.push({
          displayName: 'test user' + i,
          avatar: 'http://placehold.it/50x50'
        });
        if(--$scope.i <= 0) {
          $scope.moreIndividual = false;
          break;
        }
      }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };

    $scope.loadMoreTeam = function() {
      for(var j = 0; j < 10; j++) {
        $scope.team.push({
          displayName: 'test user' + j,
          avatar: 'http://placehold.it/50x50'
        });
        if(--$scope.j <= 0) {
          $scope.moreTeam = false;
          break;
        }
      }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };

    $scope.$on('$stateChangeSuccess', function () {
      $scope.loadMoreIndividual();
    });



  }])
