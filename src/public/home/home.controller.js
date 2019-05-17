(function() {
	'use strict';

	angular.module('public')
	.controller('HomeController', HomeController);

	function HomeController(){
		var $ctrl=this;

		$ctrl.apiImag='imag/carrusel/';
		$ctrl.setTime = 5000;//5s
		$ctrl.slides= [
		{
			nombre: '1.jpg',
			titulo:'Imagen 1'
		},
		{
			nombre: '2.jpg',
			titulo:'Imagen 2'
		},
		{
			nombre: '3.jpg',
			titulo:'Imagen 3'
		}];

	}

})();