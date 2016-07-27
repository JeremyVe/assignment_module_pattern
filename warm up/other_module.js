var APP = APP || {};

APP.SimpleStubModule = (function() {

	var stub = {};
	var _privateVariable = 20;
	var _privateMethod = function() {
		return 10;
	}
	var publicVariable = "You can see me";
	stub.getPublicVariable = function() {
		return publicVariable;
	}
	stub.setPublicVariable = function(value) {
		publicVariable = value;
	}
	stub.publicMethod = function() {
		return _privateMethod() * _privateVariable;
	}

	return stub;

})();