///<reference path="../definitions/angularjs/angular.d.ts" />

var app = angular.module('gy', ['ngRoute', 'ngAnimate']);

app.run(() => {
	console.log('making sure this runs...');
});