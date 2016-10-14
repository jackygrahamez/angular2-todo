System.register(['immutable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var immutable_1;
    var TodoItem;
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem(data) {
                    if (data === void 0) { data = undefined; }
                    data = data || { text: '', completed: false, uuid: uuid.v4() };
                    this._data = immutable_1.Map(data);
                }
                Object.defineProperty(TodoItem.prototype, "uuid", {
                    get: function () {
                        return this._data.get('uuid');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TodoItem.prototype, "text", {
                    get: function () {
                        return this._data.get('text');
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoItem.prototype.setText = function (value) {
                    return new TodoItem(this._data.set('text', value));
                };
                Object.defineProperty(TodoItem.prototype, "completed", {
                    get: function () {
                        return this._data.get('completed');
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoItem.prototype.setCompleted = function (value) {
                    return new TodoItem(this._data.set('completed', value));
                };
                return TodoItem;
            }());
            exports_1("TodoItem", TodoItem);
        }
    }
});

//# sourceMappingURL=todoitem.js.map
