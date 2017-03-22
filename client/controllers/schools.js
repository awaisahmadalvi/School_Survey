var myApp = angular.module('myApp');

myApp.controller('SchoolsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('SchoolsController loaded...');

	$scope.getSchools = function(){
		$http.get('/api/schools').success(function(response){
			$scope.schools = response;
		});
	}

	$scope.getSchool = function(){
		var id = $routeParams.id;
		$http.get('/api/schools/'+id).success(function(response){
			$scope.school = response;
		});
	}

	$scope.addSchool = function(){
		$http.post('/api/schools', $scope.school).success(function(response){
			window.location.href='#/schools';
		});
	}

	$scope.updateSchool = function(){
		var id = $routeParams.id;
		$http.put('/api/schools/'+id, $scope.school).success(function(response){
			window.location.href='#/schools';
		});
	}

	$scope.removeSchool = function(id){
		$http.delete('/api/schools/'+id).success(function(response){
			window.location.href='#/schools';
		});
	}
}]);
