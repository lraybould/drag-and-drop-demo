"use strict";
(function () {
    (function _init() {
        _bindEvents();
    })();

    function _bindEvents() {
        _setupDraggableShapes();
    }

    function _onDragStop(event, ui) {
        alert("AAA");
    }

    function _setupDraggableShapes() {
        jQuery(".shape").draggable({
            stop: _onDragStop
        });
    }
})();