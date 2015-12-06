// Ionic Starter App
window.backendUrl = 'http://localhost:8080/b2b-backend';
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'chart.js', 'satellizer'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($authProvider) {

    $authProvider.loginUrl = window.backendUrl + '/auth/login';
    $authProvider.signupUrl = window.backendUrl + '/auth/signup';
    $authProvider.loginRoute = window.backendUrl + '/login';
    $authProvider.unlinkUrl = window.backendUrl + '/auth/unlink/';
    $authProvider.tokenRoot = 'data';
    //$authProvider.loginRedirect
    // OAuth popup should expand to full screen with no location bar/toolbar.
    var commonConfig = {
      popupOptions: {
        location: 'no',
        toolbar: 'no',
        width: window.screen.width,
        height: window.screen.height
      }
    };

    if (ionic.Platform.isIOS() || ionic.Platform.isAndroid()) {
      $authProvider.platform = 'mobile';
      commonConfig.redirectUri = 'http://localhost/';
    }

    $authProvider.facebook(angular.extend({}, commonConfig, {
      url: window.backendUrl + '/auth/facebook',
      responseType: 'code',
      clientId: '1446413615662932'
    }));

    //$authProvider.twitter(angular.extend({}, commonConfig, {
    //    url: 'http://localhost:3000/auth/twitter'
    //}));
    //
    //$authProvider.google(angular.extend({}, commonConfig, {
    //    clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com',
    //    url: 'http://localhost:3000/auth/google'
    //}));
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
          }
        }
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.quest-list', {
        url: '/quest-list',
        views: {
          'menuContent': {
            templateUrl: 'templates/quest-list.html',
            controller: 'QuestListController'
          }
        }
      })
      .state('app.quest-detail', {
        url: '/quest-detail/:questId',
        views: {
          'menuContent': {
            templateUrl: 'templates/quest-detail.html',
            controller: 'QuestDetailController'
          }
        }
      })

      .state('app.poll-list', {
        url: '/poll-list',
        views: {
          'menuContent': {
            templateUrl: 'templates/poll-list.html',
            controller: 'PollController'
          }
        }
      })
      .state('app.calendar', {
        url: '/calendar',
        views: {
          'menuContent': {
            templateUrl: 'templates/calendar.html',
            controller: 'CalendarController'
          }
        }
      })

      .state('app.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/profile.html',
            controller: 'ProfileController'
          }
        }
      })

      .state('app.profile-target', {
        url: '/profile-target/:target',
        views: {
          'menuContent': {
            templateUrl: 'templates/profile-target.html',
            controller: 'ProfileTargetController'
          }
        }
      })

      .state('app.tournament-list', {
        url: '/tournament-list',
        views: {
          'menuContent': {
            templateUrl: 'templates/tournament-list.html',
            controller: 'TournamentListController'
          }
        }
      })

      .state('app.tournament-detail', {
        url: '/tournament-detail/:tournamentId',
        views: {
          'menuContent': {
            templateUrl: 'templates/tournament-detail.html',
            controller: 'TournamentDetailController'
          }
        }
      })

      .state('app.announcement-list', {
        url: '/announcement-list',
        views: {
          'menuContent': {
            templateUrl: 'templates/announcement-list.html',
            controller: 'AnnouncementListController'
          }
        }
      })

      .state('app.feedback-list', {
        url: '/feedback-list',
        views: {
          'menuContent': {
            templateUrl: 'templates/feedback-list.html',
            controller: 'FeedbackListController'
          }
        }
      })

      .state('app.event-list', {
        url: '/event-list',
        views: {
          'menuContent': {
            templateUrl: 'templates/event-list.html',
            controller: 'EventListController'
          }
        }
      })

      .state('app.event-detail', {
        url: '/event-detail/:eventId',
        views: {
          'menuContent': {
            templateUrl: 'templates/event-detail.html',
            controller: 'EventDetailController'
          }
        }
      })

      .state('app.happy-hour-list', {
        url: '/happy-hour-list',
        views: {
          'menuContent': {
            templateUrl: 'templates/happy-hour-list.html',
            controller: 'HappyHourListController'
          }
        }
      })

      .state('app.happy-hour-detail', {
        url: '/happy-hour-detail/:happyHourId',
        views: {
          'menuContent': {
            templateUrl: 'templates/happy-detail-list.html',
            controller: 'HappyHourDetailController'
          }
        }
      })

      .state('app.survey-list', {
        url: '/survey-list',
        views: {
          'menuContent': {
            templateUrl: 'templates/survey-list.html',
            controller: 'SurveyListController'
          }
        }
      })

      .state('app.survey-detail', {
        url: '/survey-detail/:surveyId',
        views: {
          'menuContent': {
            templateUrl: 'templates/survey-detail.html',
            controller: 'SurveyDetailController'
          }
        }
      })

      .state('app.leaderboard',{
        url: '/leaderboard',
        views: {
          'menuContent': {
            templateUrl: 'templates/leaderboard.html',
            controller: 'LeaderboardController'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
  });
