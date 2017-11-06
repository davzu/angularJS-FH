var app = angular.module("universidadApp", []);

app.controller("profesorCtrl", function ($scope) {
	$scope.profesor = profesorData;
	$scope.editando = {};
	$scope.mostrarMantenimiento = false;

	$scope.editar = function () {
		$scope.mostrarMantenimiento = true;
		angular.copy($scope.profesor, $scope.editando);
	}

	$scope.guardar = function () {
		angular.copy($scope.editando, $scope.profesor);
		$scope.editando = {};
		$scope.mostrarMantenimiento = false;
	}

	$scope.cancelar = function () {
		$scope.editando = {};
		$scope.mostrarMantenimiento = false;
	}

});

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la fí­sica termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}