(function(){
    angular.module('YTJSLibApp')
    .directive("pagination",function(){
        return{
            templateUrl:"templates/pagination.html",
            link:function(scope,elem,attrs){
                console.log(scope);
            }
        }
    });
})();
