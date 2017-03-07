'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function ($scope) {
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    $scope.first = {
    	test1 : 'test11111',
    	test11 : 'test1'
    };

    $scope.second = {
    	second : 'second22222'
    };

    $scope.third = {
    	third : 'third3333333'
    };

    $scope.currentTab = 'first';
    
    $scope.menus = {
    	first : true,
    	second : false,
    	third : false
    }

    var initMenu = function(){
	    $scope.menus = {
	    	first : false,
	    	second : false,
	    	third : false
	    }    	
    };

    $scope.showData = function(key) {
    	$scope.currentTab = key;
    }

    $scope.getContent = function(){

    	console.log($scope[$scope.currentTab]);
    	return $scope[$scope.currentTab];
    }

  });
