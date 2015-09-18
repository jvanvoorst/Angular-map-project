angular.module("myApp", []);
angular.module("myApp").controller("mainController", ["$scope", function($scope) {
	$scope.points = []
	$scope.clickNum = 0;
	$scope.noteVisible = false;
	
	$scope.mapClick = function(event) {
		$scope.currentPoint = $scope.createPoint($scope.clickNum, event.pageX, event.pageY);
		$scope.offsetYInput = $scope.currentPoint.yCoord - 50;
		$scope.inputVisible = true;
		$scope.clickNum++;
	};
	
	$scope.createPoint = function(clickNum, x, y) {
		x -= 10;
		y -= 32;
		$scope.points.push({point : clickNum, xCoord : x, yCoord : y});
		return $scope.points[$scope.points.length - 1];
	};

	$scope.submitNote = function() {	
		$scope.points[$scope.clickNum-1].note = $scope.noteText;
		$scope.inputVisible = false;
		$scope.noteText = '';
    	console.log($scope.points);
	}

	$scope.pointEnter = function(point) {
		$scope.noteDisplay = $scope.points[point];
		$scope.offsetY = $scope.noteDisplay.yCoord;
		$scope.noteVisible = true;

	}	

	$scope.pointLeave = function() {
		$scope.noteVisible = false;
	}

	$scope.removePoint = function(point) {
		$scope.points[point] = {};
		$scope.noteVisible = false;
	}
}]);	