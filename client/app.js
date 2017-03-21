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
	.when('/schools/add',{
		controller:'SchoolsController',
		templateUrl: 'views/add_school.html'
	})
	.when('/schools/edit/:id',{
		controller:'SchoolsController',
		templateUrl: 'views/edit_school.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
