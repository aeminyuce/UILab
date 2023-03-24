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

    xl?: typeof gridSizes,
    lg?: typeof gridSizes,
    md?: typeof gridSizes,
    sm?: typeof gridSizes,
    xs?: typeof gridSizes,

    slide?: number,

    className?: string,
    style?: any,
}

const Carousel = function (

    { children, col, xl, lg, md, sm, xs, slide, className, style }:CarouselProps) {

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
            <div className={classes} style={style} data-ui-slide={slide} data-ui-col={col}
                data-ui-col-xl={xl} data-ui-col-lg={lg} data-ui-col-md={md} data-ui-col-sm={sm} data-ui-col-xs={xs}>
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

    animate? : number,

    className?: string,
    style?: any,

}

const CrouselContent = function (

    { children, animate, className, style }:CrouselContentProps) {

        // classes
        const setClassName = className ? ' ' + className : '';
        const classes = 'ui-carousel-content' + setClassName;

        return (
            <div className={classes} style={style} data-ui-animate={animate}>
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