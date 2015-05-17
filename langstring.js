(function (namespace) {
    var LangString = function (str, config) {
        this.str = str;
        this.config = config;
    };
    LangString.prototype.toString = function () {
        return this.langResolver(this.str, this.config);

    };
    LangString.prototype.langResolver = function () {
        var dict = LangString.dict[LangString.langCode];
        if (dict === undefined) {
            alert("There is no dictionary for code", LangString.langCode);
            return;
        }
        var x = dict[this.str];
        if (typeof x === "function") {
            return x(this.config);
        } else {
            return x;
        }
    }


    namespace.LangString = LangString;
})(window);
