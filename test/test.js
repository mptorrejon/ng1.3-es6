'use strict';

require('jsdom-global/register');

var _angular = require('../node_modules/angular/angular');

var _angular2 = _interopRequireDefault(_angular);

var _vendorBundle = require('../dist/vendor.bundle.js');

var _vendorBundle2 = _interopRequireDefault(_vendorBundle);

var _angularMocks = require('angular-mocks');

var _angularMocks2 = _interopRequireDefault(_angularMocks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("my-test", function () {
	console.log("Hello World!");
	// let app = ng.module(directives);
	console.log(window.angular.module);
});

// let ng = window.angular;
// import directives from './directive.js';
// import app from ''
