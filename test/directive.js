'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = myDirective = _angular2.default.module("directives", []).directive('myDirective', [function ($scope) {
	return {
		restrict: 'E',
		template: _template2.default,
		controller: _angular2.default.noop
	};
}]);
