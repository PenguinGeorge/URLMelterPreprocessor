var PagePreprocessor = function() {};
PagePreprocessor.prototype = {
    run: function(arguments) {
        arguments.completionFunction({"url": document.URL, "title": document.title});
    }
};
var ExtensionPreprocessingJS = new PagePreprocessor;
