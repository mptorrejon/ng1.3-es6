'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = require('angular/angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import template from '../template.html';

// export default angular.module("directives", []).directive('myDirective', [

// 	function($scope){
// 		return{
// 			restrict: 'E',
// 			template: template,
// 			controller: angular.noop,
// 		}
// 	}
// ]);


var Square = function () {
	function Square() /*$scope*/{
		_classCallCheck(this, Square);

		this.lastname = 'Torrejon';
		// $scope.name = "Mauricio";
	}

	_createClass(Square, [{
		key: 'getName',
		value: function getName() {
			return;
		}
	}]);

	return Square;
}();

exports.default = Square;
