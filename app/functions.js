exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn.apply(this, arr);
    },

    speak: function (fn, obj) {
        return fn.call(obj);
    },

    functionFunction: function (str) {
        return function (str_inner) { return str + ', ' + str_inner; }
    },

    makeClosures: function (arr, fn) {
		return arr.map(function(item){ 
			var sqr_num = fn(item);
			var sqr = function(){ 
						return sqr_num; 
					};
			return sqr; 
		});
    },

    partial: function (fn, str1, str2) {
		var op=str1+ ', ' +str2;
		return function(str3) {
			return op+str3;
		};
    },

    useArguments: function () {

    },

    callIt: function (fn) {

    },

    partialUsingArguments: function (fn) {

    },

    curryIt: function (fn) {

    }
};
