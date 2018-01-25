import angular from 'angular';
import template from './template.html';

export default myDirective = angular.module("directives", []).directive('myDirective', [
	
	function($scope){
		return{
			restrict: 'E',
			template: template,
			controller: angular.noop,
		}
	}
]);