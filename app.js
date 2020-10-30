// Code goes here

// "YTJSLibApp" correspond au module root indiqué dans l'index.html
angular.module("YTJSLibApp", ["ui.router"])

  .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {
    // On indique que si l'url n'est pas connue, on redirige vers "/forbidden"
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'homeController',
        })
        .state('toto', {
            url: '/toto',
            template: '<h1>TOTO KKKKKMLMMMDKJHJDK </h1>',
        })
        .state('tutu', {
          url: '/tutu',
          template: '<h1>TUTU KKKKKMLMMMDKJHJDK </h1>',
        })
        .state('user', {
            url: '/user=?{{userName}}',
            //url: '/user',
            templateUrl: 'video_user.html',
            controller: 'videoUserController',
        })
        .state('machin', {
          url: '/machin',
          template: '<h1>LE MACHIN </h1>',
      })
    //$stateProvider
      //On déclare un $state pour la page d'accueil
      // .state("home", {
      //   url: "/",
      //   templateUrl: "home.html"
      // })
      
      // On déclare un state avec deux vues : list et detail
      // .state("dreams", {
      //   url: "/dreams",
      //   views: {
      //     // Puisque le $state contiendra plusieurs vue [liste à gauche | détail à droite], on ne peut noter les attributs "templateUrl" et "controller" directement dans le state,
      //     // il faut définir une vue sans nom => ""
      //     "": {
      //       template: "<div class=\"fifty\" ui-view=\"list\"></div><div class=\"fifty\" ui-view=\"detail\"></div>",
      //     },
      //     // Pour désigner la vue, on la nomme "nom-de-la-vue@state.sur.lequel.ui.view.est.posée"
          
      //     // Par défaut, une seule des deux vues est obligatoire : la liste
      //     "list@dreams": {
      //       templateUrl: "dreamslist.html",
      //       controller: "DreamListController"
      //     },
      //     // Pour la vue détail, on ajoutera un template par défaut
      //     "detail@dreams": {
      //       template: "<span>Sélectionnez un rêve</span>"
      //     }
      //   },
      //   resolve: {
      //     // Bien que seule la vue "list" a besoin de la liste, le resolve est placé sur le state lui-même afin de pouvoir être utilisé depuis les $states enfant, vous pouvez cependant avoir un attribut "resolve" sur chacune des vues
      //     dreams: [function(){
      //       return [
      //         {id: 1, description: "Le titre est explicite, mais ça va couter cher en billet d'avion", name: "Manger tous les bonbons du monde"},
      //         {id: 2, description: "Bon, ça va être compliqué, je suis développeur pas astronaute", name: "Aller sur la lune"},
      //         {id: 3, description: "J'avais plus d'idées ...", name: "Surement un autre super reve"}
      //       ];
      //     }]
      //   }
      // })
      
      // // On déclare un $state pour voir le détail d'un élément de la liste
      // // Vous constatez que le $state est nesté dans le précédent (dreams.dream), ça impliquera que les urls s'additionnent => "/dreams" + "/{dreamId}" === "/dream/{dreamId}"
      // .state("dreams.dream", {
      //   // L'url sera l'id du détail, on précise son type : ici un int (par défaut c'est un boolean)
      //   url: "/{dreamId:int}",
      //   // Afin d'expliciter que l'id sera utilisé, on note sa valeur par défaut juste en-dessous
      //   params: {
      //     dreamId: 0
      //   },
        
      //   // Vous pouvez constater que le $state n'a pas de templateUrl, mais qu'il contient une vue
      //   views: {
      //     // Ici, on indique qu'on va overrider uniquement la vue "detail" du state "dreams"
      //     "detail@dreams": {
      //       templateUrl: "dreamdetail.html",
      //       controller: "DreamDetailController",
      //       resolve: {
      //         // On peut récupérer les dépendances d'un $state parent ("dreams.dream": state parent === "dreams") ou courant
      //         dream: ["$q", "$stateParams", "dreams", function($q, $stateParams, dreams){
      //           var dream = dreams.find(e => e.id === $stateParams.dreamId);
                
      //           // Si une seule promesse du resolve n'est pas résolue, le $state (controller + template) ne sera pas chargé
      //           // Ici : si on ne trouve pas le dream, on reject (PS : une exception produit le même résultat)
      //           if(!dream) {
      //             return $q.reject();
      //           }
      //           return $q.when(dream); // ou "return dream;" suffit
      //         }]
              
      //       }
      //     }
      //   }
      // })
      
      // .state("dreams.dream.description", {
      //   url: "/description",
      //   views: {
      //     // En écrivant "@" sans préciser ni le $state, ni la vue, on ciblera le ui-view root (index.html)
      //     // Je le fais pour l'exemple, mais en pratique, on aurait surement utilisé "detail@dreams" afin de conserver la liste sur le côté gauche
      //     "@": {
      //       controller: ["$scope", "description", function($scope, description){
      //         $scope.description = description;
      //       }],
      //       // Si vous revenez sur un $state parent, il n'est pas nécessaire de ré-écrire les params
      //       template: "<a ui-sref=\"dreams.dream\">Revenir à la liste des rêves</a><p ng-bind=\"'Description : ' + description\"></p><a ui-sref=\".justforfun\">Bonus</a><ui-view></ui-view>"
      //     }
      //   },
      //   resolve: {
      //     // Ici on ne peut pas utiliser "dream.description" puisque dream est une dépendance chargée dans sur une VUE du $state parent ("dreams.dream") et non sur le $state parent lui même
      //     description: ["$stateParams", "dreams", function($stateParams, dreams){
      //       return dreams.find(function(d){return d.id === $stateParams.dreamId}).description;
      //     }]
      //   }
      // })
      
      // .state("dreams.dream.description.justforfun", {
      //   // Comme dernier exemple, voici un autre $state, celui-ci a de spécial qu'il ne précise pas la vue utilisée
      //   // Le template sera chargé dans le ui-view sans nom du parent
      //   url: "/just-for-fun",
      //   template: "<p>Just for fun</p>"
      // });

  }]);

