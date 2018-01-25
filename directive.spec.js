import /*JSDOM from*/ 'jsdom-global/register';
import angular  from '../node_modules/angular/angular';
import directives from '../dist/vendor.bundle.js';

// let ng = window.angular;
// import directives from './directive.js';
// import app from ''

import ngMock from 'angular-mocks';

describe("my-test", function(){
	console.log("Hello World!");
	// let app = ng.module(directives);
	console.log( window.angular );
});