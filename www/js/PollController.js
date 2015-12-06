angular.module('starter.controllers')
  .controller('PollController', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
    $scope.polls = [{
      'id': 1,
      'title': 'Sample Poll 1',
      'description': 'Sample Poll 2',
      'choices': [{
        'description': 'Choice 1',
        'percentage': 50
      }, {
        'description': 'Choice 2',
        'percentage': 20
      }, {
        'description': 'Choice 3',
        'percentage': 20
      }, {
        'description': 'Choice 4',
        'percentage': 10
      }]
    }, {
      'id': 2,
      'title': 'Sample Poll 2',
      'description': 'Sample Poll 2',
      'choices': [{
        'description': 'Choice 1',
        'percentage': 10
      }, {
        'description': 'Choice 2',
        'percentage': 10
      }, {
        'description': 'Choice 4',
        'percentage': 80
      }]
    }];
  }])
