angular.module('starter.controllers')
  .controller('QuestListController', ['$scope', '$rootScope', '$state', '$ionicPopup', '$ionicActionSheet', function ($scope, $rootScope, $state, $ionicPopup, $ionicActionSheet) {

    $scope.data = {};

    $scope.quests = [{
      questId: 1,
      title: 'quest title 1',
      description: 'quest description 1',
      user: {
        displayName: 'test user 1'
      },
      createDate: 'November 3',
      likeCount: 10,
      questPhoto: 'http://ecx.images-amazon.com/images/I/41D5vU4I1NL.jpg',
      comments: [{
        commentId: 1,
        content: 'test comment 1',
        user: {
          displayName: 'test user 3',
          avatar: 'http://placehold.it/50x50'
        },
        likeCount: 5,
        createDate: '5 November 2005'
      }
      ]
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
            $state.go('app.quest-detail', {questId: optionTarget});
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
          for (var i = 0; i < $scope.quests.length; i++) {
            if ($scope.quests[i].questId == commentTarget) {
              $scope.quests[i].comments.push({
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
      for (var i = 0; i < $scope.quests.length; i++) {
        var target = $scope.quests[i];
        if (target.questId == likeTarget) {
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
      for (var i = 0; i < $scope.quests.length; i++) {
        var target = $scope.quests[i];
        if (target.questId == likeTarget) {
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
  .controller('QuestDetailController', ['$scope', '$rootScope', '$state', '$stateParams', function ($scope, $rootScope, $state, $stateParams) {
    $scope.quests = [{
      questId: 1,
      title: 'quest title 1',
      description: 'quest description 1',
      user: {
        displayName: 'test user 1'
      },
      createDate: 'November 3',
      likeCount: 10,
      questPhoto: 'http://ecx.images-amazon.com/images/I/41D5vU4I1NL.jpg',
      completedUsers: [{
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
      }
      ]
    }];

    var targetQuest = parseInt($stateParams.questId);
    for(var i = 0; i < $scope.quests.length; i++) {
      if($scope.quests[i].questId == targetQuest) {
        $scope.quest = $scope.quests[i];
        break;
      }
    }
  }])
