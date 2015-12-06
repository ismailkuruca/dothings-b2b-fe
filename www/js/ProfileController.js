angular.module("starter.controllers")
  .controller("ProfileController", ['$rootScope', "$scope", '$state', function ($rootScope, $scope, $state) {

    $scope.navigate = function (target) {
      $state.go('app.profile-target', {target: target});
    };
  }])

  .controller("ProfileTargetController", ['$rootScope', "$scope", '$stateParams', '$ionicPopup', function ($rootScope, $scope, $stateParams, $ionicPopup) {
    var target = $stateParams.target;
    if (target === 'sleep') {
      $scope.amount = 8;

      $scope.$watch('amount', function () {
        console.log($scope.amount);
      });
      $scope.type = "saat";
      $scope.labels = ["Çok Üstünde", "Üstünde", "Hedefte", "Altında", "Çok Altında"];
      $scope.data = [0.222, 0.443, 0.15, 0.85, 0.10];
      $scope.colours = [
        {
          fillColor: '#C93125',
          strokeColor: '#C93125',
          highlightFill: '#C93125',
          highlightStroke: '#C93125'
        },
        {
          fillColor: '#D44237',
          strokeColor: '#D44237',
          highlightFill: '#D44237',
          highlightStroke: '#D44237'
        },
        {
          fillColor: '#E45639',
          strokeColor: '#E45639',
          highlightFill: '#E45639',
          highlightStroke: '#E45639'
        },
        {
          fillColor: '#0091B4',
          strokeColor: '#0091B4',
          highlightFill: '#0091B4',
          highlightStroke: '#0091B4'
        },
        {
          fillColor: '#0BB1A9',
          strokeColor: '#0BB1A9',
          highlightFill: '#0BB1A9',
          highlightStroke: '#0BB1A9'
        }];

      $scope.setAmount = function () {
        var popup = $ionicPopup.show({
          template: '<div class="item range"><i class="icon ion-ios-circle-outline"></i><input type="range" ng-model="data.amount" max="20" min="2"><i class="icon ion-record"></i></div><p class="popup-paragraph">{{data.amount}} saat</p>',
          title: 'Hedef seçiniz',
          subTitle: 'Sadece sayı girişi yapınız',
          scope: $scope,
          buttons: [{
            text: 'İptal'
          }, {
            text: '<b>Kaydet</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (!$scope.data.amount) {
                e.preventDefault();
              } else {
                return $scope.data.amount;
              }
            }
          }
          ]
        });

        popup.then(function (resolution) {
          $scope.amount = resolution;
        });
      };
    }


  }])
