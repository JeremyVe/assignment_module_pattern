var APP = APP || {};

APP.SimpleModule = (function(otherModule) {

	var _privateVariable = 20;
	var _privateMethod = function() {
		return 10;
	}

	var otherPrivateMethod = function() {
		return otherModule.getPublicVariable();
	}

	var publicVariable = "You can see me";
	var getPublicVariable = function() {
		return publicVariable;
	}
	var setPublicVariable = function(value) {
		publicVariable = value;
	}
	var publicMethod = function() {
		return _privateMethod() * _privateVariable;
	}

	return {
		getPublicVariable: getPublicVariable,
		setPublicVariable: setPublicVariable,
		publicMethod: publicMethod,
		otherPrivateMethod: otherPrivateMethod
	}

})(APP.SimpleStubModule);

$(document).ready(function() {

})