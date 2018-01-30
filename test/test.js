'use strict';

require('jsdom-global/register');

var _angular = require('../node_modules/angular/angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularMocks = require('../node_modules/angular-mocks/angular-mocks.js');

var _angularMocks2 = _interopRequireDefault(_angularMocks);

var _vendorBundle = require('../dist/vendor.bundle.js');

var _vendorBundle2 = _interopRequireDefault(_vendorBundle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("my-test", function () {
	console.log(app);
	var app = void 0;
	beforeEach(function () {
		module('app');
		app = _angular2.default.mock.module("app");
	});

	console.log(app);
});
