///Create the Module
var myApp = angular.module("myModule",[]);

/// Create the controller
var myController = function($scope){
	
	var employee = {
		firstName: "David",
		lastName: "Hastings",
		gender: "Male"
	};


	$scope.employee = employee;
};

///Register the controller with the module
myApp.controller("myController", myController);


/**
or we can do such as this

Creating the controller and registering with the module all done in one line

myApp.controller("myController", function($scope){
	$scope.message = "AngularJS Tutorial";
});
**/


