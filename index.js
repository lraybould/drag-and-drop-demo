"use strict";
(function () {
    const SHAPES = {
        SQUARE: "square",
        TRIANGLE: "triangle",
        HEXAGON: "hexagon",
        CIRCLE: "circle" 
    };

    const QUADRANT = {
        TOP_LEFT: "top-left",
        TOP_RIGHT: "top-right",
        BOTTOM_LEFT: "bottom-left",
        BOTTOM_RIGHT: "bottom-right" 
    };
    
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
        const shape = ui.draggable;
        const quadrant = jQuery(this);

        const newShapeClass = _getShapeClassByQuadrant(quadrant);

        shape.removeClass("circle square hexagon triangle");
        shape.addClass(newShapeClass);
    }

    function _getShapeClassByQuadrant(quadrant) {
        if (quadrant.hasClass(QUADRANT.TOP_LEFT)) {
            return SHAPES.CIRCLE;
        }
        else if (quadrant.hasClass(QUADRANT.TOP_RIGHT)) {
            return SHAPES.HEXAGON;
        }
        else if (quadrant.hasClass(QUADRANT.BOTTOM_LEFT)) {
            return SHAPES.SQUARE;
        }
        else if (quadrant.hasClass(QUADRANT.BOTTOM_RIGHT)) {
            return SHAPES.TRIANGLE;
        }
    }

})();