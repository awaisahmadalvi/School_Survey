var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'SchoolsController',
		templateUrl: 'views/schools.html'
	})
	.when('/schools', {
		controller:'SchoolsController',
		templateUrl: 'views/schools.html'
	})
	.when('/schools/details/:id',{
		controller:'SchoolsController',
		templateUrl: 'views/school_details.html'
	})
	.when('/images/:id',{
		controller:'ImagesController',
		templateUrl:'views/images_details.html'
	})
	.when('/add_imei',{
		controller:'ImagesController',
		templateUrl: 'views/add_imei.html'
	})
	/*
	.when('/schools/edit/:id',{
		controller:'SchoolsController',
		templateUrl: 'views/edit_school.html'
	})*/
	.otherwise({
		redirectTo: '/'
	});
});
