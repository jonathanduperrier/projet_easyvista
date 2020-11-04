// Code goes here

// "YTJSLibApp" correspond au module root indiqué dans l'index.html
angular.module("YTJSLibApp", ["ui.router"])

  .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {
    // On indique que si l'url n'est pas connue, on redirige vers "/forbidden"
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'homeController',
        })
        .state('video', {
          url: '/video/:id',
          controller: 'videoController',
          templateUrl: 'video.html',
      })
  }]);

