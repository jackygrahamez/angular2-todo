System.register(['angular2/platform/browser', './store/todostore', './todolist/todolist'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, todostore_1, todolist_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (todostore_1_1) {
                todostore_1 = todostore_1_1;
            },
            function (todolist_1_1) {
                todolist_1 = todolist_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(todolist_1.default, [todostore_1.default]);
        }
    }
});

//# sourceMappingURL=bootstrap.js.map
