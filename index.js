import angular from 'angular';
import { directives } from './directive.js';

export default app =  angular.module("MyApp", ['directives']).run();
console.log(app);
app.controller('myController', ()=>{
	console.log("hello");
});
