angular.module('starter.controllers')
  .controller('TournamentListController', ['$scope', '$rootScope', '$state', '$ionicPopup', '$ionicActionSheet', function ($scope, $rootScope, $state, $ionicPopup, $ionicActionSheet) {

    $scope.data = {};

    $scope.tournaments = [{
      tournamentId: 1,
      title: 'tournaments title 1',
      description: 'tournaments description 1',
      user: {
        displayName: 'tournaments user 1'
      },
      location: {
        lat: 40.9996157,
        lon: 29.0445929
      },
      createDate: 'November 3',
      endDate: 'November 9',
      address: 'Camiden sonra sağda',
      likeCount: 10,
      comments: [{
        commentId: 1,
        content: 'test comment 1',
        user: {
          displayName: 'test user 3',
          avatar: 'http://placehold.it/50x50'
        },
        likeCount: 5,
        createDate: '5 November 2005'
      }]
    }, {

      tournamentId: 2,
      title: 'tournaments title 2',
      description: 'tournaments description 2',
      user: {
        displayName: 'tournaments user 2'
      },
      location: {
        lat: 41.9996157,
        lon: 29.0445929
      },
      createDate: 'November 3',
      endDate: 'November 19',
      address: 'Camiden sonra solda',
      likeCount: 10,
      comments: [{
        commentId: 1,
        content: 'test comment 1',
        user: {
          displayName: 'test user 3',
          avatar: 'http://placehold.it/50x50'
        },
        likeCount: 5,
        createDate: '5 November 2005'
      }]
    }];

    $scope.showOptions = function (optionTarget) {

      //TODO: check for target's creator against logged in user to determine menu items

      var actionResult = $ionicActionSheet.show({
        buttons: [
          {text: '<b>View Detail</b>'},
          {text: 'Move'}
        ],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function () {
          // add cancel code..
        },
        buttonClicked: function (index) {
          if (index == 0) {
            $state.go('app.tournament-detail', {tournamentId: optionTarget});
          }
        },
        destructiveButtonClicked: function (result) {
          console.log("shiiieeet");
        }
      });
    };

    $scope.addComment = function (commentTarget) {
      var popup = $ionicPopup.show({
        template: '<textarea type="text" ng-model="data.comment" style="min-height: 60px;" placeholder="Yorumunuz"></textarea>',
        title: 'Yorum',
        scope: $scope,
        buttons: [
          {text: 'İptal'},
          {
            text: '<b>Kaydet</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (!$scope.data.comment || $scope.data.comment.length < 0) {
                e.preventDefault();
              } else {
                var resolution = $scope.data.comment;
                delete $scope.data.comment;
                return resolution;
              }
            }
          }
        ]
      });

      popup.then(function (resolution) {
        if (resolution && resolution.length > 0) {
          for (var i = 0; i < $scope.tournaments.length; i++) {
            if ($scope.tournaments[i].tournamentId == commentTarget) {
              $scope.tournaments[i].comments.push({
                commentId: 12,
                content: resolution,
                user: {
                  displayName: 'test user 3',
                  avatar: 'http://placehold.it/50x50'
                },
                likeCount: 5,
                createDate: '5 November 2005'
              });
            }
          }
        }

      });
    };

    $scope.like = function (likeTarget) {
      for (var i = 0; i < $scope.tournaments.length; i++) {
        var target = $scope.tournaments[i];
        if (target.tournamentId == likeTarget) {
          if (target.liked) {
            target.likeCount--;
            target.liked = false;
          } else {
            target.likeCount++;
            target.liked = true;
          }
        }
      }
    };

    $scope.likeComment = function (likeTarget, commentTarget) {
      for (var i = 0; i < $scope.tournaments.length; i++) {
        var target = $scope.tournaments[i];
        if (target.tournamentId == likeTarget) {
          for (var j = 0; j < target.comments.length; j++) {
            var targetComment = target.comments[j];
            if (targetComment.commentId == commentTarget) {
              if (targetComment.liked) {
                targetComment.likeCount--;
                targetComment.liked = false;
              } else {
                targetComment.likeCount++;
                targetComment.liked = true;
              }
            }
          }
        }
      }
    };
  }])
  .controller('TournamentDetailController', ['$scope', '$rootScope', '$state', '$stateParams', function ($scope, $rootScope, $state, $stateParams) {
    $scope.tournaments = [{
      tournamentId: 1,
      title: 'tournaments title 1',
      description: 'tournaments description 1',
      user: {
        displayName: 'tournaments user 1'
      },
      location: {
        lat: 40.9996157,
        lon: 29.0445929
      },
      createDate: 'November 3',
      endDate: 'November 9',
      address: 'Camiden sonra sağda',
      likeCount: 10,
      attendingUsers: [{
        displayName: 'test user 1',
        avatar: 'http://placehold.it/50x50'
      }, {
        displayName: 'test user 2',
        avatar: 'http://placehold.it/50x50'
      }, {
        displayName: 'test user 3',
        avatar: 'http://placehold.it/50x50'
      }, {
        displayName: 'test user 4',
        avatar: 'http://placehold.it/50x50'
      }],
      comments: [{
        commentId: 1,
        content: 'test comment 1',
        user: {
          displayName: 'test user 3',
          avatar: 'http://placehold.it/50x50'
        },
        likeCount: 5,
        createDate: '5 November 2005'
      }]
    }, {

      tournamentId: 2,
      title: 'tournaments title 2',
      description: 'tournaments description 2',
      user: {
        displayName: 'tournaments user 2'
      },
      location: {
        lat: 41.9996157,
        lon: 29.0445929
      },
      createDate: 'November 3',
      endDate: 'November 19',
      address: 'Camiden sonra solda',
      likeCount: 10,
      comments: [{
        commentId: 1,
        content: 'test comment 1',
        user: {
          displayName: 'test user 3',
          avatar: 'http://placehold.it/50x50'
        },
        likeCount: 5,
        createDate: '5 November 2005'
      }]
    }];

    var targetTournament = parseInt($stateParams.tournamentId);
    for(var i = 0; i < $scope.tournaments.length; i++) {
      if($scope.tournaments[i].tournamentId == targetTournament) {
        $scope.tournament = $scope.tournaments[i];
        break;
      }
    }
    $scope.tournament.image = generateMapImage($scope.tournament.location, [$scope.tournament.location]);
  }])
