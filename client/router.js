// import IndexController from './index.controller.js';
import '@uirouter/angularjs';
import {headerComponent } from './directives/header/header.directive.js';

export var RouterModule = angular.module("RouterMod", [
	'ui.router',
	headerComponent
]).config([
	'$stateProvider',
	function($stateProvider){
		
		$stateProvider
			.state("home", {
				template: '<div>Mauricio</div>'
			})
			.state("about", {
				template: "<site-header></site-header>"
			});	
	}
]).name;