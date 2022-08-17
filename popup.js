

let amazonextension = angular.module("amazonextension", ['ui.router'])
    .config(['$urlRouterProvider','$stateProvider', function ($urlRouterProvider,$stateProvider) {
        $urlRouterProvider.otherwise('login')

        $stateProvider
            .state('login',{
                url:'/login',
                templateUrl:'templates/login.html'
            })
            .state('signup',{
                url:'/signup',
                templateUrl:'templates/signup.html'
            })
    }])

amazonextension.controller('amazoncontroller', ['$scope', function($scope) {
    $scope.logindata = function(username,password){
        let user={
            username:username,
            password:password,
            do:"login"
        };
        chrome.runtime.sendMessage(user)
    }
    $scope.signupdata = function(username,email,password){
        let userSignup={
            username :username,
            email:email,
            password: password,
            do:"signup"
        }
        chrome.runtime.sendMessage(userSignup)
        

    }
}]);