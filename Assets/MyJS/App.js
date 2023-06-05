var delightfulHands = angular.module("delightfulHands",['ngRoute']);

delightfulHands.run(function($rootScope,$http){
    $http.get("/api/products").then(function(responce){
        $rootScope.products = responce.data;
    })
});

delightfulHands.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when("/", {
        templateUrl : "Views/Home.html",
        controller : "HomeController"
    })
    .when("/ProductDetails/:P_id", {
        templateUrl : "Views/Details.html",
        controller : "DetailsController"
    })
    .when("/AddNewProduct.html", {
        templateUrl : "Views/AddProduct.html",
        controller : "AddNewProductController"
    })
    .when("/EditProduct/:P_id/", {
        templateUrl : "Views/EditProduct.html",
        controller : "EditProductController"
    })
    .otherwise({
        templateUrl : "Views/Error404.html",
    });

    // $locationProvider.html5Mode({
    //     enabled:true
    // });
});