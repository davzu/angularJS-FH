(function () {
	var app = angular.module("ngRepeat", []);

	app.controller("listadoCtrl", function ($scope) {
		$scope.listado = ["David", "Clara", "Jorge"];

		$scope.listadoProfesores = [{ nombre: "David", edad: 27, curso: "IP" }, { nombre: "Clara", edad: 30, curso: "Matemática I" }, { nombre: "Jorge", edad: 41, curso: "PETI" }];

	});

})();