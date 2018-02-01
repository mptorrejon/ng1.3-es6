import angular from 'angular';
// import IndexController from './index.controller';
import {RouterModule} from './router';
// import ngRoute from 'angular-route';
import '@uirouter/angularjs';
// import 'app.css';
import './main.scss';

export var app =  angular.module("MyApp", [
	'ui.router',
	RouterModule
]);
// .controller('IndexController', IndexController);

