import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '../js/core/globals';

// utils
import { CarouselProps, CrouselSliderProps, CrouselContentProps, CrouselNavProps, CrouselDotsProps } from './utils/models';

// assets
import '../less/modules/carousel';
import '../js/modules/carousel';

const Carousel = function (props:CarouselProps) {

    const { children, col, xl, lg, md, sm, xs, slide, className, style } = props;

    useEffect(() => {

        // remove active carousels
        ui.removeClass(`.${ui.carousel.target}`, ui.carousel.nameActive);

        // init
        ui.carousel.Init();

    });

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-carousel${setClassName}`;

    return (
        <div className={classes} style={style} data-ui-slide={slide} data-ui-col={col}
            data-ui-col-xl={xl} data-ui-col-lg={lg} data-ui-col-md={md} data-ui-col-sm={sm} data-ui-col-xs={xs}>
                {children}
        </div>
    );

}

const CrouselSlider = function (props:CrouselSliderProps) {

    const { children, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-carousel-slider ui-ease-layout ui-ease-in-out${setClassName}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );

}

const CrouselContent = function (props:CrouselContentProps) {

    const { children, animate, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-carousel-content${setClassName}`;

    return (
        <div className={classes} style={style} data-ui-animate={animate}>
            {children}
        </div>
    );

}

const CrouselNav = function (props:CrouselNavProps) {

    const { children, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-carousel-nav ui-ease-1st-btn${setClassName}`;

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );

}

const CrouselDots = function (props:CrouselDotsProps) {

    const { children, className, style } = props;

    // classes
    const setClassName = className ? ` ${className}` : '';
    const classes = `ui-carousel-dots${setClassName}`;

    return (
        <span className={classes} style={style}>
            {children}
        </span>
    );

}

export default Object.assign(Carousel, {
    Slider: CrouselSlider,
    Content: CrouselContent,
    Nav: CrouselNav,
    Dots: CrouselDots,
});