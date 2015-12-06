angular.module('starter.controllers')
  .controller('CalendarController', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    $scope.items = [
      {
        id: 1,
        title: 'Title 1',
        icon: 'icon ion-home',
        time: '28-08-2015'
      },
      {
        id: 2,
        title: 'Title 2',
        icon: 'icon ion-ios-heart',
        time: '20-08-2015'
      },
      {
        id: 3,
        title: 'Title 3',
        icon: 'icon ion-ios-star',
        time: '19-08-2015'
      },
      {
        id: 4,
        title: 'Title 4',
        icon: 'icon ion-plane',
        time: '18-08-2015'
      },
      {
        id: 5,
        title: 'Title 5',
        icon: 'icon ion-ios-game-controller-a',
        time: '10-08-2015'
      },
      {
        id: 6,
        title: 'Title 6',
        icon: 'icon ion-home',
        time: '02-08-2015'
      },
    ];
  }])
