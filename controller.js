angular.module('YTJSLibApp')
.controller('homeController', function($scope){
    $scope.title = "Select a video";
})
.controller('videoController', function($scope, $stateParams, $sce){
    $scope.videoId = $stateParams.id;
    $scope.videoTitle = $stateParams.title;
    $scope.videoLink = $sce.trustAsResourceUrl("//www.youtube.com/embed/" + $scope.videoId);
})
.controller('searchVideosController', function($scope, $stateParams, $sce){
    
});
