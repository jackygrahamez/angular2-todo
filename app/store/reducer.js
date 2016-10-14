System.register(['immutable', './todoitem'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var immutable_1, todoitem_1;
    function reducer(state, action) {
        if (state === void 0) { state = immutable_1.List(); }
        function indexOf(uuid) {
            return state.findIndex(function (i) { return i.uuid === action.itemId; });
        }
        switch (action.type) {
            case 'ADD':
                return state.push(new todoitem_1.TodoItem().setText(action.text));
            case 'REMOVE':
                return immutable_1.List(state.filter(function (i) { return i.uuid !== action.itemId; }));
            case 'UPDATE_ITEM_TEXT':
                return state.update(indexOf(action.itemId), function (i) { return i.setText(action.text); });
            case 'UPDATE_ITEM_COMPLETION':
                return state.update(indexOf(action.itemId), function (i) { return i.setCompleted(action.completed); });
            default:
                return state;
        }
    }
    exports_1("reducer", reducer);
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            },
            function (todoitem_1_1) {
                todoitem_1 = todoitem_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=reducer.js.map
