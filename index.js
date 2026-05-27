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

    const SHAPE_CLASS = ".shape",
        QUADRANT_CLASS = ".quadrant",
        ALL_SHAPE_CLASSES = "circle square hexagon triangle",
        NUMBER_OF_SHAPES = 5;
    
    // Initialise the app immediately after script loads using an IIFE
    (function _init() {
        _setInitialShapePositions();
        _bindEvents();
    })();

    function _bindEvents() {
        _setupDraggableShapes();
        _setupQuadrantsAsDroppable();
    }

    function _setupDraggableShapes() {
        jQuery(SHAPE_CLASS).draggable();
    }

    function _setupQuadrantsAsDroppable() {
        // Handles shape drop event and updates shape class based on quadrant
        jQuery(QUADRANT_CLASS).droppable({
            accept: SHAPE_CLASS,
            drop: _onDragStop
        });
    }

    function _onDragStop(event, ui) {
        const shape = ui.draggable;
        const quadrant = jQuery(this);

        const newShapeClass = _getShapeClassByQuadrant(quadrant);

        shape.removeClass(ALL_SHAPE_CLASSES);
        shape.addClass(newShapeClass);

        shape.attr('aria-labelledby', newShapeClass);
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

    function _setInitialShapePositions() {
        const shapes = jQuery(SHAPE_CLASS);
        const spacing = (window.innerWidth / 2) / NUMBER_OF_SHAPES;
        
        // Evenly distribute the starting shapes within the top left starting quadrant.
        shapes.each(function (index) {
            jQuery(this).css({
                left: index * spacing
            });
        });
    }

})();