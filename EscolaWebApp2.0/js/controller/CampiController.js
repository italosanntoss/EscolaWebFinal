var campiController = function($scope, $mdToast, campusApi) {

  $scope.campi = [];

  $scope.listar = function() {
    console.log("Listando")
      campusApi.listar()
        .then(function(response) {
          $scope.campi = response.data;
        })
        .catch(function(error) {

        });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      campusApi.buscarPorNome(sigla)
        .then(function(response) {
          $scope.campi = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  $scope.limparBusca = function() {
    $scope.sigla = "";
    $scope.campus = [];
  };

}

app.controller('CampiController', campiController);
