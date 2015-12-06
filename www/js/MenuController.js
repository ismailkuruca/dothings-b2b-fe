angular.module('starter.controllers')
  .controller('MenuController', ['$scope', '$rootScope', '$state', '$ionicScrollDelegate', '$auth', function ($scope, $rootScope, $state, $ionicScrollDelegate, $auth) {

    $scope.menus = [
      {
        title: "Profilim",
        subMenus: [],
        link: '#/app/profile',
        cssClass: 'icon-user'
      }, {
        title: "Bildirimler",
        subMenus: [],
        link: '',
        cssClass: 'icon-bell',
        notification: 3
      }, {
        title: "Takvimim",
        subMenus: [],
        link: '#/app/calendar',
        cssClass: 'icon-calendar-2'
      }, {
        title: "Görevler",
        subMenus: [],
        link: '#/app/quest-list',
        cssClass: 'icon-task'
      }, {
        title: "Takımım",
        subMenus: [],
        link: '',
        cssClass: 'icon-team'
      }, {
        title: "Liderlik Tablosu",
        subMenus: [],
        link: '#/app/leaderboard',
        cssClass: 'icon-leaderboard'
      }, {
        title: "İş",
        subMenus: [
          {
            title: "Anketler",
            subMenus: [],
            link: '#/app/poll-list',
            cssClass: 'icon-signal'
          }, {
            title: "Duyurular",
            subMenus: [],
            link: '#/app/announcement-list',
            notification: 3,
            cssClass: 'icon-announcement'
          }, {
            title: "Geri Bildirimler",
            subMenus: [],
            link: '#/app/feedback-list',
            cssClass: 'icon-feedback'
          }, {
            title: "Değerlendirmeler",
            subMenus: [],
            link: '#/app/survey-list',
            cssClass: 'icon-evaluation'
          }],
        cssClass: 'icon-work'
      }, {
        title: "Yaşam",
        subMenus: [{
          title: "Etkinlikler",
          subMenus: [],
          link: '#/app/event-list',
          cssClass: 'icon-event'
        }, {
          title: "Turnuvalar",
          subMenus: [],
          link: '#/app/tournament-list',
          cssClass: 'icon-tournament'
        }, {
          title: "Happy Hour",
          subMenus: [],
          link: '#/app/happy-hour-list',
          cssClass: 'icon-happy-hour'
        }],
        link: '',
        cssClass: 'icon-life'
      }, {
        title: "Ayarlar",
        subMenus: [],
        cssClass: 'icon-settings'
      }
    ];

    $scope.toggleGroup = function (group) {
      if (group.subMenus.length !== 0) {
        if ($scope.isGroupShown(group)) {
          $scope.shownGroup = null;
        } else {
          $scope.shownGroup = group;
        }
        $ionicScrollDelegate.resize();
      }
    };

    $scope.isGroupShown = function (group) {
      return $scope.shownGroup === group;
    };

    $scope.isAuthenticated = function () {
      return $auth.isAuthenticated();
    };
    $scope.logout = function () {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Logout',
        template: 'Are you sure you want to log out?'
      });
      confirmPopup.then(function (res) {
        if (res) {
          $auth.logout();
          window.location.reload();
        }
      });
    };
  }])
