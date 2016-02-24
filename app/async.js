exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
    async: function (value) {
        var deferCall = $.Deferred();
        deferCall.resolve(value);
        return deferCall.promise();
    },

    manipulateRemoteData: function (url) {
        var deferCall = $.Deferred();
        deferCall.resolve(['Adam', 'Alex', 'Matt', 'Paul', 'Rebecca']);
        return deferCall.promise();
    }
};
