// Code goes here
// "YTJSLibApp" correspond au module root indiqué dans l'index.html
angular.module("YTJSLibApp", ["ui.router"])
  .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {
    // On indique que si l'url n'est pas connue, on redirige vers "/forbidden"
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'templates/home.html',
          controller: 'homeController',
      })
      .state('video', {
        url: '/video/:id/:title',
        controller: 'videoController',
        templateUrl: 'templates/video.html',
      })
      .state('search-videos', {
        url: '/search-videos',
        controller: 'searchVideosController',
        templateUrl: 'templates/search_video.html',
      })
  }]);

