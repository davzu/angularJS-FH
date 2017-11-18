(function () {
	var app = angular.module("httpApp", []);

	app.controller("servicioCtrl", function ($scope, $http, $sce) {
		var urlServiceListar = "http://javascript.tibajodemanda.com/listar";

		$scope.personas = {};
		$scope.tblPersonas = "./ng-include-table.html"

		$http.get(urlServiceListar)
			.then(function (respuesta) {
				$scope.personas = respuesta.data;
			})
			.catch(function (respuesta) {
				console.error(respuesta);
			})
			.finally(function () {
				console.log("FIN");
			});

	});

})();