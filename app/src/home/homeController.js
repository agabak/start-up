(function(){
    'use strict';
    // make  sure all  the  name  match
    angular.module('mainApp')
         .controller('homeController', homeController);
   
    function homeController(){
        var vm =   this;
        vm.title = "Home Controller";
    }
}());