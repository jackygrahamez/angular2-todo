System.register(['immutable', './todoitem', 'redux', './reducer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var immutable_1, todoitem_1, redux_1, reducer_1;
    var TodoStore;
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (todoitem_1_1) {
                todoitem_1 = todoitem_1_1;
            },
            function (redux_1_1) {
                redux_1 = redux_1_1;
            },
            function (reducer_1_1) {
                reducer_1 = reducer_1_1;
            }],
        execute: function() {
            TodoStore = (function () {
                function TodoStore() {
                    var _this = this;
                    var storedItemsString = localStorage.getItem('todolist') || '[]';
                    var storedItems = JSON.parse(storedItemsString);
                    var items = immutable_1.List(storedItems.map(function (i) { return new todoitem_1.TodoItem(i._data); }));
                    this.store = redux_1.createStore(reducer_1.reducer, items);
                    this.store.subscribe(function () {
                        localStorage.setItem('todolist', JSON.stringify(_this.items.toJS()));
                    });
                }
                Object.defineProperty(TodoStore.prototype, "items", {
                    get: function () {
                        return this.store.getState();
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoStore.prototype.dispatch = function (action) {
                    this.store.dispatch(action);
                };
                return TodoStore;
            }());
            exports_1("default", TodoStore);
        }
    }
});

//# sourceMappingURL=todostore.js.map
