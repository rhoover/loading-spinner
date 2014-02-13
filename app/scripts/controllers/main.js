'use strict';

angular.module('loadingSpinnerApp')
  .controller('MainCtrl', function ($scope) {
        $scope.$on('LOADING', function () { // see container.js for 'LOADING'
            $scope.loading = true;
        });
        $scope.$on('LOADED', function () { // see container.js for 'LOADED'
            $scope.loading = false;
        });
  });
