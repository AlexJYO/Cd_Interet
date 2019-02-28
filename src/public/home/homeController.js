(function() {
'use strict';

angular.module('public')
.controller('HomeController', HomeController);

function HomeController(){
	ctrl=this;
	console.log(ctrl)
	
	crtl.apiImag='imag/carrusel/';
	ctrl.setTime = 5000;//5s
	ctrl.slides= [
	{
		nombre: '1.png',
		titulo:'Imagen 1'
	},
	{
		nombre: '2.png',
		titulo:'Imagen 2'
	},
	{
		nombre: '3.png',
		titulo:'Imagen 3'
	},
}

})();