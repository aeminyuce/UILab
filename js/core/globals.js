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
        svgElems: ['svg', 'path', 'g', 'circle', 'rect', 'polygon', 'ellipse', 'text', 'lineargradient'],

        // icons
        svgIconViewBox: '0 0 264 264',
        nameIcon: 'ui-icon',

        // classnames
        nameOpen: 'ui-open',
        nameOpenEase: 'ui-open-ease',

        nameShow: 'ui-show',
        nameShowEase: 'ui-show-ease',
        nameShowed: 'ui-showed',

        namePause: 'ui-pause',
        namePauseEase: 'ui-pause-ease',

        nameLoaded: 'ui-loaded',
        nameNotLoaded: 'ui-no-loaded',

        nameSuccess: 'ui-success',
        nameHide: 'ui-hidden',
        nameFaded: 'ui-faded',
        nameResized: 'ui-resized',
        nameFiltered: 'ui-filtered',
        nameActive: 'ui-active',
        nameSelected: 'ui-selected',
        nameChecked: 'ui-checked',
        nameToggle: 'ui-toggle',
        nameChange: 'ui-changed',

        nameAsc: 'ui-asc',
        nameDesc: 'ui-desc',

        // data attributes
        dataPrefix: 'data-ui-',
        dataClasses: 'data-ui-classes',

        // custom events
        eventAjaxCallback: 'ui:ajaxCallback',
        eventDomChange: 'ui:domChange'

    }
};