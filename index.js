"use strict";
(function () {
    (function _init() {
        _bindEvents();
    })();

    function _bindEvents() {
        _setupDraggableShapes();
        _setupQuadrantsAsDroppable();
    }

    function _setupDraggableShapes() {
        jQuery(".shape").draggable();
    }

    function _setupQuadrantsAsDroppable() {
        jQuery(".quadrant").droppable({
            accept: ".shape",
            drop: _onDragStop
        });
    }

    function _onDragStop(event, ui) {
        alert("AAA");
    }
    
})();