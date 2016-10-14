System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function addItem(text) {
        return {
            type: 'ADD',
            text: text
        };
    }
    exports_1("addItem", addItem);
    function removeItem(itemId) {
        return {
            type: 'REMOVE',
            itemId: itemId
        };
    }
    exports_1("removeItem", removeItem);
    function updateItemText(itemId, text) {
        return {
            type: 'UPDATE_ITEM_TEXT',
            itemId: itemId,
            text: text
        };
    }
    exports_1("updateItemText", updateItemText);
    function updateItemCompletion(itemId, completed) {
        return {
            type: 'UPDATE_ITEM_COMPLETION',
            itemId: itemId,
            completed: completed
        };
    }
    exports_1("updateItemCompletion", updateItemCompletion);
    return {
        setters:[],
        execute: function() {
        }
    }
});

//# sourceMappingURL=actions.js.map
