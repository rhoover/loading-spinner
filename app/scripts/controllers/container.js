'use strict';

angular.module('loadingSpinnerApp')
    .controller('ContainerCtrl', function ($scope, $timeout) { //delete $timeout, unless you're using it yourself for other reasons. It's here just for the below test.

        $scope.$emit('LOADING'); // this *will* be first

        //...
        // all kinds of whatever needs to be done will be done here
        //...

        $scope.$emit('LOADED'); // this *will* be last

        //This is provided so you can test to see it works as expected. Comment out the line above and un-comment this if that's what you want to do.
        // $timeout(function () {
        //     $scope.$emit('LOADED');
        // }, 5000);
});
