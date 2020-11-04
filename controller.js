angular.module('YTJSLibApp')
.controller('homeController', function($scope){
    $scope.toto = "toto";
})
.controller('videoController', function($scope, $stateParams, $sce){
    $scope.videoId = $stateParams.id;
    $scope.videoTitle = $stateParams.title;
    //$scope.videoLink = 'https://www.youtube.com/embed/' + $scope.videoId;
    $scope.videoLink = $sce.trustAsResourceUrl("//www.youtube.com/embed/" + $scope.videoId);
});