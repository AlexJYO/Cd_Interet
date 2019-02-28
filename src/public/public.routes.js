(function() {
  'use strict';

  angular.module('public')
  .config(routeConfig);

  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider'];
  function routeConfig ($stateProvider) {
    // Routes
    $stateProvider
      .state('public', {
        abstract: true,
        templateUrl: 'src/public/public.html'
      })
      .state('public.home', {
        url: '/',
        templateUrl: 'src/public/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      })
      .state('public.servicios',{
        url: '/Servicios',
        templateUrl: 'src/public/servicios/serv.html'
      })
      .state('public.productos',{
        url: '/Productos',
        templateUrl: 'src/public/productos/prod.html'
      })
      .state('public.informacion',{
        url: '/informacion',
        templateUrl: 'src/public/informacion/info.html'
      });
  }
})();
