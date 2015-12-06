angular.module('starter.controllers')
  .controller('FeedbackListController', ['$scope', '$rootScope', '$state', '$ionicPopup', '$ionicActionSheet', function ($scope, $rootScope, $state, $ionicPopup, $ionicActionSheet) {

    $scope.data = {};

    $scope.feedbacks = [{
      feedbackId: 1,
      title: 'announcement title 1',
      description: 'announcement description 1',
      user: {
        displayName: 'test user 1'
      },
      createDate: 'November 3',
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
      }
      ]
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
          for (var i = 0; i < $scope.feedbacks.length; i++) {
            if ($scope.feedbacks[i].feedbackId == commentTarget) {
              $scope.feedbacks[i].comments.push({
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
      for (var i = 0; i < $scope.feedbacks.length; i++) {
        var target = $scope.feedbacks[i];
        if (target.feedbackId == likeTarget) {
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
      for (var i = 0; i < $scope.feedbacks.length; i++) {
        var target = $scope.feedbacks[i];
        if (target.feedbackId == likeTarget) {
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
