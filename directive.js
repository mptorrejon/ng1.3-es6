import angular from 'angular';
import template from './template.html';

export var myDirective = angular.module("directives", []).directive('myDirective', [
	function(){
		return{
			restrict: 'E',
			template: template,
			controller: angular.noop,
		}
	}
]);