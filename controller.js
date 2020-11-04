// angular.module("YTJSLibApp")
// // Le controller de la liste
// .controller("DreamListController", ["$scope", "dreams", function($scope, dreams){
//   // $scope.$parent === ui-view.$scope
//   angular.extend($scope, {dreams});
// }])
// // Le controller du détail
// .controller("DreamDetailController", ["$scope", "dream", "dreams", function($scope, dream, dreams){
//   // $scope.$parent === "dreams".$scope
//   // $scope.$parent.$parent === ui-view.$scope
//   // On peut récupérer tous les éléments contenu dans le resolve du $state courant (dream) ainsi ceux des resolves des $states parents (dreams)
//   angular.extend($scope, {dream});
// }]);

// var YTJSLibApp = angular.module('YTJSLibApp', []);

// YTJSLibApp.controller('homeController', function($scope){
//     $scope.toto = "toto";
// });

// YTJSLibApp.controller('videoUserController', function($scope){
//     $scope.toto = "videoUserController";
// });

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