(function () {
    'use strict';

    var app = angular
        .module('mainApp', ['ui.router']);
    
    app.config(function($stateProvider, $urlRouterProvider){
         $urlRouterProvider.otherwise('/home');
        
         $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/src/home/partial-home.html',
            controller: 'homeController as vm'
        });
    
    });
}());
