import * as React from 'react';
import { useEffect } from 'react';
import { ui } from '@ui';

// assets
import '@less/modules/carousel';
import '@js/modules/carousel';

const gridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface CarouselProps {

    children?: React.ReactNode,

    col?: typeof gridSizes,

    colXL?: typeof gridSizes,
    colLG?: typeof gridSizes,
    colMD?: typeof gridSizes,
    colSM?: typeof gridSizes,
    colXS?: typeof gridSizes,

    slideTimer?: number,

    className?: string,
    style?: any,
}

const Carousel = function (

    { children, col, colXL, colLG, colMD, colSM, colXS, slideTimer, className, style }:CarouselProps) {

        useEffect(() => {

            // remove active carousels
            ui.removeClass('.' + ui.carousel.target, ui.carousel.nameActive);

            // init
            ui.carousel.Init();

        }); // Runs every render

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-carousel' + setClassName;

        return (
            <div className={classes} style={style} data-ui-slide={slideTimer}
                data-ui-col-xl={colXL}
                data-ui-col-lg={colLG}
                data-ui-col={col}
                data-ui-col-md={colMD}
                data-ui-col-sm={colSM}
                data-ui-col-xs={colXS}>
                    {children}
            </div>
        );
    }

interface CrouselSliderProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

}

const CrouselSlider = function (

    { children, className, style }:CrouselSliderProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-carousel-slider ui-ease-layout ui-ease-in-out' + setClassName;

        return (
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }

interface CrouselContentProps {

    children?: React.ReactNode,

    animateTimer? : number,

    className?: string,
    style?: any,

}

const CrouselContent = function (

    { children, animateTimer, className, style }:CrouselContentProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-carousel-content' + setClassName;

        return (
            <div className={classes} style={style} data-ui-animate={animateTimer}>
                {children}
            </div>
        );
    }

interface CrouselNavProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

}

const CrouselNav = function (

    { children, className, style }:CrouselNavProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-carousel-nav ui-ease-1st-btn' + setClassName;

        return (
            <div className={classes} style={style}>
                {children}
            </div>
        );
    }

interface CrouselDotsProps {

    children?: React.ReactNode,

    className?: string,
    style?: any,

}

const CrouselDots = function (

    { children, className, style }:CrouselDotsProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-carousel-dots' + setClassName;

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