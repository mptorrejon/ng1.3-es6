'use strict';

require('jsdom-global/register');

var _angular = require('../node_modules/angular/angular');

var _angular2 = _interopRequireDefault(_angular);

var _angularMocks = require('../node_modules/angular-mocks/angular-mocks.js');

var _angularMocks2 = _interopRequireDefault(_angularMocks);

var _vendorBundle = require('../dist/vendor.bundle.js');

var _vendorBundle2 = _interopRequireDefault(_vendorBundle);

var _directive = require('../test/directive.js');

var _directive2 = _interopRequireDefault(_directive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("my-test", function () {
	// console.log(Square.name);
	var $scope = {};

	var sq = new _directive2.default();
	console.log(sq.lastname);
});
