var adminApp = angular.module('adminApp', ['ngRoute']);
adminApp.controller('ctrlUm', function ($scope) {
  $scope.mensagem = 'Mensagem do controller Um  Página home !!!';
});
//rotas aqui :
adminApp.config(function ($routeProvider) {
  $routeProvider

  //rota do home
  .when('/', {
    templateUrl : 'pages/home.html',
    controller : 'ctrlUm'
  })
  .when('/sobre', {
    templateUrl : 'pages/sobre.html',
    controller : 'ctrlSobre'
  })
  .when('/contato', {
    templateUrl : 'pages/contato.html',
    controller : 'ctrlContato'
  })
  .otherwise({
  	redirectTo : '/'
  });
});
//controller sobre
adminApp.controller('ctrlSobre', function ($scope) {
  $scope.mensagem = 'Essa é a página sobre!!!';
});
//contrller contato
adminApp.controller('ctrlContato', function ($scope) {
  $scope.mensagem = 'Essa é a página Contato!!!';
});
