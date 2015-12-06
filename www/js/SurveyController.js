angular.module('starter.controllers')
  .controller('SurveyListController', ['$scope', '$rootScope', '$state', '$ionicPopup', '$ionicActionSheet', function ($scope, $rootScope, $state, $ionicPopup, $ionicActionSheet) {

    $scope.data = {};

    $scope.surveys = [{
      surveyId: 1,
      title: 'survey title 1',
      description: 'survey description 1',
      createDate: '15 Nov',
      user: {
        displayName: 'test user 1'
      },
      createDate: 'November 3',
      elements: {
        polls: [{
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
            'percentage': 50
          }, {
            'description': 'Choice 2',
            'percentage': 50
          }]
        }],
        texts: [{
          'title': 'Sample Question',
          'description': 'Sample question'
        }]

      }
    }];

    $scope.showOptions = function (optionTarget) {

      //TODO: check for target's creator against logged in user to determine menu items

      var actionResult = $ionicActionSheet.show({
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function () {
          // add cancel code..
        },
        destructiveButtonClicked: function (result) {
          console.log("shiiieeet");
        }
      });
    };

  }])

  .controller('SurveyDetailController', ['$scope', '$rootScope', '$state', '$stateParams', '$ionicPopup', function ($scope, $rootScope, $state, $stateParams, $ionicPopup) {

    $scope.surveys = [{
      surveyId: 1,
      title: 'survey title 1',
      description: 'survey description 1',
      createDate: '15 Nov',
      user: {
        displayName: 'test user 1'
      },
      createDate: 'November 3',
      elements: {
        polls: [{
          'id': 2,
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
          'id': 3,
          'title': 'Sample Poll 2',
          'description': 'Sample Poll 2',
          'choices': [{
            'description': 'Choice 1',
            'percentage': 50
          }, {
            'description': 'Choice 2',
            'percentage': 50
          }]
        }],
        texts: [{
          'title': 'Sample Question',
          'description': 'Sample question'
        }]

      }
    }];

    var targetSurvey = parseInt($stateParams.surveyId);
    for (var i = 0; i < $scope.surveys.length; i++) {
      if ($scope.surveys[i].surveyId == targetSurvey) {
        $scope.survey = $scope.surveys[i];
        break;
      }
    }

  }])
