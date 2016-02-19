var app = angular.module('app', [
   'mapsApp',
   'ui.router'
  ]);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
    })
    .state('appointments', {
      url: '/appointments',
      templateUrl: 'templates/appointments.html'
    })
    .state('signin', {
      url: '/signin',
      templateUrl: 'templates/signin.html'
    })
}])