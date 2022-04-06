/* globals */

export const ui = {
    globals: {

        // responsive breakpoints
        xl: 1680,
        lg: 1400,
        md: 959,
        sm: 767,
        xs: 480,

        // effect timers
        fast: 100,
        ease: 150,
        slow: 400,
        slow2x: 800,
        slow3x: 1200,
        slow4x: 1600,
        slow5x: 2000,

        // non-closest event listeners
        nonClosestElems: ['mouseenter', 'mouseleave', 'mouseout', 'mouseover'],

        // passive event listeners
        passiveEvents: ['touchstart', 'touchmove'],

        // svg elements
        svgElems: ['svg', 'path', 'g', 'circle', 'rect', 'polygon', 'ellipse', 'text'],

        // icons
        iconSrc: '../dist/icons.svg', // IE not support SVG external reference!

        // data attributes
        dataPrefix: 'data-ui-',
        dataClasses: 'data-ui-classes',

        // custom events
        eventAjaxCallback: 'ui:ajaxCallback',
        eventDomChange: 'ui:domChange'

    }
};