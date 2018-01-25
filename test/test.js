'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _directive = require('../directive.js');

var _directive2 = _interopRequireDefault(_directive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_angular2.default); //test suite

// beforeEach(angular.mock.module("MyApp"));

describe("my-test", function () {
	console.log(_directive2.default);
});
