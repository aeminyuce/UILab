import { ReactNode, ReactEventHandler, ElementType } from 'react';

const gridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// Alerts
interface AlertsDialogCutsomProps {
    first?: string;
    second?: string;
    third?: string;
}

export interface AlertsDialogProps {
    msg: any;
    success?: string;
    error?: string;
    custom?: AlertsDialogCutsomProps;
    callback?(value: any): any;
}

export interface AlertsMessageProps {
    msg: any;
    pos?: 'tl' | 'tr' | 'bl' | 'br';
    theme?: 'success' | 'warning' | 'danger';
}

// Avatar
export interface AvatarProps {
    children?: ReactNode;
    onClick?: ReactEventHandler;
    onMouseDown?: ReactEventHandler;
    onMouseUp?: ReactEventHandler;
    size?: 'lg' | 'sm' | 'xs';
    title?: string;
    className?: string;
    data?: any;
    style?: any;
}

// Breadcrumbs
export interface BreadcrumbsProps {
    children?: ReactNode;
    className?: string;
    style?: any;
}

export interface BreadcrumbsItemProps {
    children?: ReactNode;
    to?: string;
    className?: string;
    data?: any;
    style?: any;
}

// Buttons
export interface ButtonProps {
    children?: ReactNode;
    as?: 'div' | 'span';
    onClick?: ReactEventHandler;
    onMouseDown?: ReactEventHandler;
    onMouseUp?: ReactEventHandler;
    value?: any;
    disabled?: boolean;
    title?: string;
    to?: string;
    state?: any;
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    active?: boolean;
    passive?: boolean;
    multi?: boolean;
    square?: boolean;
    ghost?: boolean;
    block?: boolean;
    myRef?: any;
    noease?: boolean;
    nostyle?: boolean;
    type?: 'submit' | 'button' | 'reset';
    size?: 'lg' | 'sm' | 'xs';
    fluid?: 'md' | 'sm' | 'xs';
    rel?: string;
    id?: any;
    form?: any;
    className?: string;
    data?: any;
    style?: any;
}

export interface ButtonWrapperProps {
    children?: ReactNode;
    as?: 'holder' | 'list';
    ease: '1st' | '2nd';
    largeButtons?: boolean;
    className?: string;
    data?: any;
    style?: any;
}

// Calendar
export interface CalendarProps {
    className?: string;
    style?: any;
}

export interface CalendarPickerProps {
    onChange?: ReactEventHandler;
    onInput?: ReactEventHandler;
    onBlur?: ReactEventHandler;
    name?: string;
    tabIndex?: number;
    value?: any;
    defaultValue?: any;
    placeholder?: string;
    disabled?: boolean;
    autoComplete?: 'on' | 'off' | 'username' | 'current-password' | string;
    number?: boolean;
    numberFloat?: boolean;
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    myRef?: any;
    id?: any;
    className?: string;
    style?: any;
}

// Card
export interface CardProps {
    children?: ReactNode;
    as?: 'div' | 'span';
    type?: 'info' | 'success' | 'warning' | 'danger';
    myRef?: any;
    className?: string;
    style?: any;
}

// Carousel
export interface CarouselProps {
    children?: ReactNode;
    col?: typeof gridSizes;
    xl?: typeof gridSizes;
    lg?: typeof gridSizes;
    md?: typeof gridSizes;
    sm?: typeof gridSizes;
    xs?: typeof gridSizes;
    slide?: number;
    className?: string;
    style?: any;
}

export interface CrouselSliderProps {
    children?: ReactNode;
    className?: string;
    style?: any;
}

export interface CrouselContentProps {
    children?: ReactNode;
    animate?: number;
    className?: string;
    style?: any;
}

export interface CrouselNavProps {
    children?: ReactNode;
    className?: string;
    style?: any;
}

export interface CrouselDotsProps {
    children?: ReactNode;
    className?: string;
    style?: any;
}

// Currency
export interface CurrencySpinnerProps {
    children?: ReactNode;
    className?: string;
    style?: any;
}

export interface CurrencyFormProps {
    children?: ReactNode;
    onChange?: ReactEventHandler;
    onInput?: ReactEventHandler;
    onBlur?: ReactEventHandler;
    name?: string;
    tabIndex?: number;
    value?: any;
    defaultValue?: any;
    placeholder?: string;
    disabled?: boolean;
    light?: boolean;
    inline?: 'always' | 'xs';
    autoComplete?: 'on' | 'off' | string;
    icons?: 'r' | 'l' | 'all';
    readOnly?: boolean;
    required?: boolean;
    hasClear?: boolean;
    maxlength: number;
    min: number;
    step?: number;
    decimal?: boolean;
    myRef?: any;
    noease?: boolean;
    id?: any;
    className?: string;
    style?: any;
}

// Donut Chart
export interface DonutChartHolderProps {
    children?: ReactNode;
    msg?: string;
    className?: string;
    style?: any;
}

export interface DonutChartItemProps {
    stroke: string;
    percent: number;
    title?: string;
}

// Dropdown
export interface DropdownProps {
    children?: ReactNode;
    hover?: boolean;
    block?: boolean;
    align?: 'l' | 'c';
    pos?: 'l' | 'r';
    nav?: true | 'full-h';
    className?: string;
    style?: any;
}

export interface DropdownMenuProps {
    children?: ReactNode;
    as?: 'div' | 'span';
    hasIcon?: boolean;
    className?: string;
    style?: any;
}

export interface DropdownItemProps {
    children?: ReactNode;
    onClick?: ReactEventHandler;
    onMouseDown?: ReactEventHandler;
    onMouseUp?: ReactEventHandler;
    selected?: boolean;
    className?: string;
    style?: any;
}

// Form
export interface FormLabelProps {
    children?: ReactNode;
    noease?: boolean;
    className?: string;
    style?: any;
}

export interface FormInputProps {
    children?: ReactNode;
    onChange?: ReactEventHandler;
    onInput?: ReactEventHandler;
    onBlur?: ReactEventHandler;
    type?: 'text' | 'password' | 'date' | 'datetime-local' | 'month' | 'week' | 'email' | 'tel' | 'time';
    name?: string;
    tabIndex?: number;
    value?: any;
    defaultValue?: any;
    placeholder?: string;
    disabled?: boolean;
    light?: boolean;
    inline?: 'always' | 'xs';
    autoComplete?: 'on' | 'off' | 'username' | 'current-password' | string;
    autoCompleteData?: string[];
    icons?: 'r' | 'l' | 'all';
    multiple?: boolean;
    readOnly?: boolean;
    number?: boolean;
    numberFloat?: boolean;
    word?: boolean;
    required?: boolean;
    hasClear?: boolean;
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number;
    myRef?: any;
    noease?: boolean;
    id?: any;
    className?: string;
    style?: any;
}

export interface FormFileProps {
    onChange?: ReactEventHandler;
    onInput?: ReactEventHandler;
    onBlur?: ReactEventHandler;
    as: 'input' | 'button';
    btnName?: string;
    placeholder?: string;
    name?: string;
    tabIndex?: number;
    value?: any;
    defaultValue?: any;
    disabled?: boolean;
    light?: boolean;
    inline?: 'always' | 'xs';
    multiple?: boolean;
    readOnly?: boolean;
    required?: boolean;
    myRef?: any;
    noease?: boolean;
    id?: any;
    className?: string;
    btnClassName?: string;
    style?: any;
}

export interface FormTextareaProps {
    onChange?: ReactEventHandler;
    onInput?: ReactEventHandler;
    rows?: number;
    cols?: number;
    name?: string;
    tabIndex?: number;
    value?: any;
    placeholder?: string;
    disabled?: boolean;
    light?: boolean;
    inline?: 'always' | 'xs';
    readOnly?: boolean;
    required?: boolean;
    minlength?: number;
    maxlength?: number;
    myRef?: any;
    toggle?: boolean;
    noease?: boolean;
    counter?: number;
    id?: any;
    className?: string;
    style?: any;
}

export interface FormSelectProps {
    children?: ReactNode;
    onChange?: ReactEventHandler;
    onInput?: ReactEventHandler;
    title?: string;
    name?: string;
    tabIndex?: number;
    value?: any;
    defaultValue?: any;
    disabled?: boolean;
    inline?: 'always' | 'xs';
    required?: boolean;
    light?: boolean;
    myRef?: any;
    noease?: boolean;
    id?: any;
    className?: string;
    style?: any;
}

export interface FormCheckProps {
    type?: 'check' | 'radio' | 'switch';
    label?: any;
    onChange?: ReactEventHandler;
    id?: any;
    name?: string;
    tabIndex?: number;
    value?: string;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    light?: boolean;
    required?: boolean;
    noease?: boolean;
    className?: string;
    style?: any;
    stateStyle?: any;
}

export interface FormRequiredMessageProps {
    children?: ReactNode;
    myRef?: any;
    className?: string;
    style?: any;
}

export interface FormHintProps {
    children?: ReactNode;
    myRef?: any;
    theme?: 'warning' | 'error';
    className?: string;
    style?: any;
}

// Grid
export interface GridContainerProps {
    children?: ReactNode;
    as: 'div' | 'header' | 'main' | 'footer';
    noGutter?: 'all' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    fixed?: true | 'xl';
    id?: any;
    className?: string;
    style?: any;
}

export interface GridRowProps {
    children?: ReactNode;
    as?: 'span' | 'dl';
    formHolder?: boolean;
    align?: 'l' | 'c' | 'r';
    fluid?: 'no' | 'xl' | 'lg' | 'sm' | 'xs';
    gap?: 'no' | 'lg' | 'md' | 'sm' | 'xs';
    vGap?: 'no' | 'lg' | 'md' | 'sm' | 'xs';
    hGap?: 'no' | 'lg' | 'md' | 'sm' | 'xs';
    className?: string;
    data?: any;
    style?: any;
}

interface GridSizeProps {
    size?: typeof gridSizes | string; offset?: typeof gridSizes; push?: typeof gridSizes; pull?: typeof gridSizes
}

interface GridOrderProps {
    when: 'xl' | 'lg' | 'default' | 'md' | 'sm' | 'xs';
    position: 'first' | 'last';
}

export interface GridColProps {
    children?: ReactNode;
    as?: 'span' | 'dt' | 'dd';
    size: typeof gridSizes | string; // string: for string col names
    offset?: typeof gridSizes;
    push?: typeof gridSizes;
    pull?: typeof gridSizes;
    xl?: typeof gridSizes | string | GridSizeProps;
    lg?: typeof gridSizes | string | GridSizeProps;
    md?: typeof gridSizes | string | GridSizeProps;
    sm?: typeof gridSizes | string | GridSizeProps;
    xs?: typeof gridSizes | string | GridSizeProps;
    fluid?: 'no' | 'xl' | 'lg' | 'sm' | 'xs';
    order?: GridOrderProps;
    className?: string;
    data?: any;
    style?: any;
}

export interface GridStaticProps {
    children?: ReactNode;
    as?: 'span';
    fluid?: 'no' | 'xl' | 'lg' | 'sm' | 'xs';
    className?: string;
    style?: any;
}

// Header Sticky
export interface HeaderStickyProps {
    children?: ReactNode;
    className?: string;
    dataClasses?: string;
    dataSpace?: number;
    style?: any;
}

// Svg Icon
export interface SvgIconProps {
    as: 'js' | 'file' | 'sprite' | 'path';
    src: ElementType | string;
    ssymbolId?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    float?: 'l' | 'r';
    opacity?: 'no' | 'more' | 'half' | 'full';
    animate?: string;
    toggle?: boolean;
    className?: string;
    style?: any;
}

// Line Chart
interface LineChartHolderSizeProps {
    rows: number;
    rowsHeight: number;
}
export interface LineChartHolderProps {
    children?: ReactNode;
    x: string[];
    step?: number;
    size?: LineChartHolderSizeProps;
    prefix?: string;
    suffix?: string;
    sep?: '.' | ';';
    showGrid?: boolean;
    showGridRootsOnly?: boolean;
    showGridText?: boolean;
    gridStroke?: number;
    showInfo?: boolean;
    showInfoStats?: boolean;
    className?: string;
    style?: any;
}

export interface LineChartLineProps {
    children?: ReactNode;
    name?: string;
    noSelected?: boolean;
    curved?: boolean;
    dotted?: boolean;
    dashed?: boolean;
    filled?: boolean;
    noCircles?: boolean;
    noRepeatedCircles?: boolean;
    onlyRepeated?: boolean;
}

export interface LineChartItemsProps {
    y: number[];
    url?: string;
}

// List Group
export interface ListgroupProps {
    children?: ReactNode;
    className?: string;
    style?: any;
}

export interface ListgroupListProps {
    children?: ReactNode;
    iconSize?: 'xxl' | 'xl' | 'lg' | 'sm' | 'xs';
    avatarSize?: 'lg' | 'default' | 'sm' | 'xs';
    className?: string;
    style?: any;
}

export interface ListgroupItemProps {
    children?: ReactNode;
    onClick?: ReactEventHandler;
    onMouseDown?: ReactEventHandler;
    onMouseUp?: ReactEventHandler;
    className?: string;
    style?: any;
}

// Map
export interface MapProps {
    sizes: any;
    defaultValue?: any;
    className?: string;
    style?: any;
}

// Modal
export interface ModalProps {
    children?: ReactNode;
    as: 'div' | 'span';
    id?: any;
    className?: string;
    style?: any;
}

export interface ModalHeaderProps {
    children?: ReactNode;
    id?: any;
    className?: string;
    style?: any;
}

export interface ModalTitleProps {
    children?: ReactNode;
    id?: any;
    className?: string;
    style?: any;
}

export interface ModalButtonsProps {
    children?: ReactNode;
    id?: any;
    className?: string;
    style?: any;
}

export interface ModalContainerProps {
    children?: ReactNode;
    id?: any;
    className?: string;
    style?: any;
}

export interface ModalFooterProps {
    children?: ReactNode;
    id?: any;
    className?: string;
    style?: any;
}

interface ModalOpenSizeProps {
    width: number; height: number
}

export interface ModalOpenProps {
    source: string;
    bg?: 'true' | 'false';
    closable?: boolean;
    type?: 'ajax' | 'iframe';
    size?: 'lg' |'md' | 'sm' | 'fullscreen' | 'inline' | ModalOpenSizeProps;
    callback?(): any;
}

// Notifier
export interface NotifierProps {
    children?: ReactNode;
    lg?: boolean;
    className?: string;
    dataVal?: any;
    style?: any;
}

// Pie Chart
export interface PieChartHolderProps {
    children?: ReactNode;
    info?: string;
    className?: string;
    style?: any;
}

export interface PieChartItemProps {
    percent: any;
    fill: string;
    customName?: string;
    title?: string;
}

// Progress Bar
export interface ProgressBarProps {
    children?: ReactNode;
    size?: 'xxl' | 'xl' | 'lg' | 'sm';
    className?: string;
    style?: any;
}

export interface ProgressBarItemProps {
    percent: any;
    prefix?: string;
    suffix?: string;
    className?: string;
    style?: any;
}

// Sidebar
export interface SidebarProps {
    children?: ReactNode;
    pos: 'l' | 'r';
    className?: string;
    style?: any;
}

export interface SidebarTitleProps {
    children?: ReactNode;
    className?: string;
    style?: any;
}

export interface SidebarContentProps {
    children?: ReactNode;
    className?: string;
    style?: any;
}

// Spacer
export interface SpacerProps {
    size: typeof gridSizes;
    className?: string;
    style?: any;
}

// Steps
export interface StepsProps {
    children?: ReactNode;
    hasInfo?: boolean;
    hasIcon?: boolean;
    className?: string;
    style?: any;
}

export interface StepsItemProps {
    children?: ReactNode;
    onClick?: ReactEventHandler;
    active?: boolean;
    infoText?: string;
    tooltipText?: string;
    className?: string;
    style?: any;
}

// Tab
export interface TabHolderProps {
    children?: ReactNode;
    accordion?: boolean;
    noease?: boolean;
    className?: string;
    dataClasses?: string;
    style?: any;
}

export interface TabContentProps {
    children?: ReactNode;
    open?: boolean;
    className?: string;
    style?: any;
}

// Table
export interface TableProps {
    children?: ReactNode;
    bottomCaption?: boolean;
    condensed?: boolean;
    condensedMore?: boolean;
    noSep?: boolean;
    nowrap?: boolean;
    sidebar?: boolean;
    valign?: boolean;
    striped?: boolean;
    hover?: boolean;
    border?: boolean;
    className?: string;
    style?: any;
}

export interface TableScrollProps {
    children?: ReactNode;
    className?: string;
    style?: any;
}

export interface TableFluidProps {
    children?: ReactNode;
    className?: string;
    style?: any;
}

// Timeline
export interface TimelineProps {
    children?: ReactNode;
    left?: boolean;
    hide?: 'lines' | 'h-lines';
    className?: string;
    style?: any;
}

export interface TimelineItemProps {
    children?: ReactNode;
    onClick?: ReactEventHandler;
    align?: 'l' | 'r';
    className?: string;
    style?: any;
}