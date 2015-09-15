angular.module("myApp", []);
angular.module("myApp").controller("mainController", ["$scope", function($scope) {
	$scope.points = []
	$scope.clickNum = 0;
	
	$scope.mapClick = function(event) {
		$scope.createPoint($scope.clickNum, event.clientX, event.clientY);
		$scope.clickNum++;
	};
	
	$scope.createPoint = function(clickNum, x, y) {
		$scope.points.push({point : clickNum, xCoord : x, yCoord : y});
		console.log($scope.points);
	};
	
}]);