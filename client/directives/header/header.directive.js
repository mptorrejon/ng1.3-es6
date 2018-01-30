import angular from 'angular';

export var headerComponent = angular.module('headerComponent', [])
	.directive('siteHeader',[
		function siteHeader(){
			return{
				restrict: 'E',
				template: "<div>My Header</div>",
				controller: angular.noop,
				controllerAs: "ctrl"
			}
		}
	]).name;