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
        return arr.map(function (item) {
            var sqr_num = fn(item);
            var sqr = function () {
                return sqr_num;
            };
            return sqr;
        });
    },

    partial: function (fn, str1, str2) {
        return function (str3) {
            var par_fn = function () { return fn(str1, str2, str3); };
            return par_fn();
        };
    },

    useArguments: function () {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    },

    callIt: function (fn) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
        return fn.apply(this, args);
    },

    partialUsingArguments: function (fn) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
        return function () {
            for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);;
            var par_fn = function () {
                return fn.apply(this, args);
            };
            return par_fn();
        };
    },

    curryIt: function (fn) {
        return function (arg1) {
            var par_fn1 = function (arg2) {
                var par_fn2 = function (arg3) {
                    var par_fn3 = function () {
                        return fn.apply(this, [arg1, arg2, arg3]);
                    }
                    return par_fn3();
                };
                return par_fn2;
            };
            return par_fn1;
        };
    }
};
