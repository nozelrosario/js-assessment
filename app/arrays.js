exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function (arr, item) {
        if (arr && arr.length > 0) {
            return arr.indexOf(item);
        } else {
            return -1;
        }
    },

    sum: function (arr) {
        if (arr && arr.length > 0) {
            var sum = 0;
            arr.map(function (item) { return sum += item; });
            return sum;
        } else {
            return 0;
        }
    },

    remove: function (arr, item) {
        if (arr) {
            var newArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] !== item) newArr.push(arr[i]);
            }
            return newArr;
        } else {
            return arr;
        }
    },

    removeWithoutCopy: function (arr, item) {
        if (arr) {
            for (var i = arr.length - 1; i >= 0; i--) {
                if (arr[i] === item) {
                    arr.splice(i, 1);
                }
            }
        }
        return arr;
    },

    append: function (arr, item) {
        if (arr) arr.push(item);
        return arr;
    },

    truncate: function (arr) {
        if (arr) arr.pop();
        return arr;
    },

    prepend: function (arr, item) {
        if (arr) {
            var newArr = [item];
            for (var i = 0; i < arr.length; i++) {
                newArr.push(arr[i]);
            }
            return newArr;
        } else {
            return arr;
        }
    },

    curtail: function (arr) {
        if (arr) {
            arr.splice(0, 1);
        }
        return arr;
    },

    concat: function (arr1, arr2) {
        if (arr1 && arr2) {
            for (var i = 0; i < arr2.length; i++) {
                arr1.push(arr2[i]);
            }
        }
        return arr1;
    },

    insert: function (arr, item, index) {
		var newArr=[];
		if(arr){
			for(var i=0; i< arr.length; i++){
				if(i === index) newArr.push(item);
				newArr.push(arr[i]);
			}
		}
		return newArr;
    },

    count: function (arr, item) {
		var counter=0;
		if(arr)	for(var i=0; i< arr.length; i++) if(arr[i] === item) counter++;
		return counter;
    },

    duplicates: function (arr) {
		var dup =[];
		if(arr) for(var i=0; i< arr.length; i++) if((this.count(arr,arr[i]) > 1) && (dup.indexOf(arr[i]) === -1)) dup.push(arr[i]);
		return dup;
    },

    square: function (arr) {
        return arr.map(function (item) { return item * item; });
    },

    findAllOccurrences: function (arr, target) {
		var occ =[];
		if(arr) for(var i=0; i< arr.length; i++) if(arr[i]=== target) occ.push(i);
		return occ;
    }
};
