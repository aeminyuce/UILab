const gridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// Alerts
export interface AlertsDialogProps {

    msg: any;

    success?: string;
    error?: string;
    custom?: {
        first?: string;
        second?: string;
        third?: string;
    };

    callback?(value: any): any;

}

export interface AlertsMessageProps {

    msg: any;

    pos?: 'tl' | 'tr' | 'bl' | 'br';
    theme?: 'success' | 'warning' | 'danger';

}

// Avatar
export interface AvatarProps {

    children?: React.ReactNode;

    onClick?: React.ReactEventHandler;
    onMouseDown?: React.ReactEventHandler;
    onMouseUp?: React.ReactEventHandler;

    size?: 'lg' | 'sm' | 'xs';
    title?: string;

    className?: string;
    data?: any;
    style?: any;

}

// Breadcrumbs
export interface BreadcrumbsProps {

    children?: React.ReactNode;

    className?: string;
    style?: any;

}

export interface BreadcrumbsItemProps {

    children?: React.ReactNode;

    to?: string;

    className?: string;
    data?: any;
    style?: any;

}

// Buttons
export interface ButtonProps {

    children?: React.ReactNode;

    as?: 'div' | 'span';

    onClick?: React.ReactEventHandler;
    onMouseDown?: React.ReactEventHandler;
    onMouseUp?: React.ReactEventHandler;

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

    children?: React.ReactNode;
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

    onChange?: React.ReactEventHandler;
    onInput?: React.ReactEventHandler;
    onBlur?: React.ReactEventHandler;

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

    children?: React.ReactNode;

    as?: 'div' | 'span';
    type?: 'info' | 'success' | 'warning' | 'danger';

    myRef?: any;

    className?: string;
    style?: any;

}

// Carousel
export interface CarouselProps {

    children?: React.ReactNode;

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

    children?: React.ReactNode;

    className?: string;
    style?: any;

}

export interface CrouselContentProps {

    children?: React.ReactNode;

    animate?: number;

    className?: string;
    style?: any;

}

export interface CrouselNavProps {

    children?: React.ReactNode;

    className?: string;
    style?: any;

}

export interface CrouselDotsProps {

    children?: React.ReactNode;

    className?: string;
    style?: any;

}

// Currency
export interface CurrencySpinnerProps {

    children?: React.ReactNode;

    className?: string;
    style?: any;

}

export interface CurrencyFormProps {

    children?: React.ReactNode;

    onChange?: React.ReactEventHandler;
    onInput?: React.ReactEventHandler;
    onBlur?: React.ReactEventHandler;

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

    children?: React.ReactNode;

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

    children?: React.ReactNode;

    hover?: boolean;
    block?: boolean;
    align?: 'l' | 'c';
    pos?: 'l' | 'r';
    nav?: true | 'full-h';

    className?: string;
    style?: any;

}

export interface DropdownMenuProps {

    children?: React.ReactNode;

    as?: 'div' | 'span';

    hasIcon?: boolean;

    className?: string;
    style?: any;

}

export interface DropdownItemProps {

    children?: React.ReactNode;

    onClick?: React.ReactEventHandler;
    onMouseDown?: React.ReactEventHandler;
    onMouseUp?: React.ReactEventHandler;

    selected?: boolean;

    className?: string;
    style?: any;

}

// Form
export interface FormLabelProps {

    children?: React.ReactNode;

    noease?: boolean;

    className?: string;
    style?: any;

}

export interface FormInputProps {

    children?: React.ReactNode;

    onChange?: React.ReactEventHandler;
    onInput?: React.ReactEventHandler;
    onBlur?: React.ReactEventHandler;

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

    onChange?: React.ReactEventHandler;
    onInput?: React.ReactEventHandler;
    onBlur?: React.ReactEventHandler;

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

    onChange?: React.ReactEventHandler;
    onInput?: React.ReactEventHandler;

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

    children?: React.ReactNode;

    onChange?: React.ReactEventHandler;
    onInput?: React.ReactEventHandler;

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

    onChange?: React.ReactEventHandler;

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

    children?: React.ReactNode;

    myRef?: any;

    className?: string;
    style?: any;

}

export interface FormHintProps {

    children?: React.ReactNode;

    myRef?: any;
    theme?: 'warning' | 'error';

    className?: string;
    style?: any;

}

// Grid
export interface GridContainerProps {

    children?: React.ReactNode;

    as: 'div' | 'header' | 'main' | 'footer';

    noGutter?: 'all' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
    fixed?: true | 'xl';

    id?: any;
    className?: string;
    style?: any;

}

export interface GridRowProps {

    children?: React.ReactNode;

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

export interface GridColProps {

    children?: React.ReactNode;

    as?: 'span' | 'dt' | 'dd';

    size: typeof gridSizes | string; // string: for string col names
    offset?: typeof gridSizes;
    push?: typeof gridSizes;
    pull?: typeof gridSizes;

    xl?: typeof gridSizes | string | {
        size?: typeof gridSizes | string; offset?: typeof gridSizes; push?: typeof gridSizes; pull?: typeof gridSizes
    };
    lg?: typeof gridSizes | string | {
        size?: typeof gridSizes | string; offset?: typeof gridSizes; push?: typeof gridSizes; pull?: typeof gridSizes
    };
    md?: typeof gridSizes | string | {
        size?: typeof gridSizes | string; offset?: typeof gridSizes; push?: typeof gridSizes; pull?: typeof gridSizes
    };
    sm?: typeof gridSizes | string | {
        size?: typeof gridSizes | string; offset?: typeof gridSizes; push?: typeof gridSizes; pull?: typeof gridSizes
    };
    xs?: typeof gridSizes | string | {
        size?: typeof gridSizes | string; offset?: typeof gridSizes; push?: typeof gridSizes; pull?: typeof gridSizes
    };

    fluid?: 'no' | 'xl' | 'lg' | 'sm' | 'xs';

    order?: {
        when: 'xl' | 'lg' | 'default' | 'md' | 'sm' | 'xs';
        position: 'first' | 'last';
    };

    className?: string;
    data?: any;
    style?: any;

}

export interface GridStaticProps {

    children?: React.ReactNode;

    as?: 'span';

    fluid?: 'no' | 'xl' | 'lg' | 'sm' | 'xs';

    className?: string;
    style?: any;

}

// Header Sticky
export interface HeaderStickyProps {

    children?: React.ReactNode;

    className?: string;
    dataClasses?: string;
    dataSpace?: number;
    style?: any;

}

// Icon
export interface IconProps {

    src: string;

    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    float?: 'l' | 'r';
    opacity?: 'no' | 'more' | 'half' | 'full';
    animate?: string;

    path?: boolean;
    toggle?: boolean;

    className?: string;
    style?: any;
}

// Line Chart
export interface LineChartHolderProps {

    children?: React.ReactNode;

    x: string[];
    step?: number;
    size?: {
        rows: number;
        rowsHeight: number;
    };
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

    children?: React.ReactNode;

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

    children?: React.ReactNode;

    className?: string;
    style?: any;

}

export interface ListgroupListProps {

    children?: React.ReactNode;

    iconSize?: 'xxl' | 'xl' | 'lg' | 'sm' | 'xs';
    avatarSize?: 'lg' | 'default' | 'sm' | 'xs';

    className?: string;
    style?: any;

}

export interface ListgroupItemProps {

    children?: React.ReactNode;

    onClick?: React.ReactEventHandler;
    onMouseDown?: React.ReactEventHandler;
    onMouseUp?: React.ReactEventHandler;

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

    children?: React.ReactNode;

    as: 'div' | 'span';

    id?: any;
    className?: string;
    style?: any;

}

export interface ModalHeaderProps {

    children?: React.ReactNode;

    id?: any;
    className?: string;
    style?: any;

}

export interface ModalTitleProps {

    children?: React.ReactNode;

    id?: any;
    className?: string;
    style?: any;

}

export interface ModalButtonsProps {

    children?: React.ReactNode;

    id?: any;
    className?: string;
    style?: any;

}

export interface ModalContainerProps {

    children?: React.ReactNode;

    id?: any;
    className?: string;
    style?: any;

}

export interface ModalFooterProps {

    children?: React.ReactNode;

    id?: any;
    className?: string;
    style?: any;

}

export interface ModalOpenProps {

    source: string;

    bg?: 'true' | 'false';
    closable?: boolean;

    type?: 'ajax' | 'iframe';
    size?: 'lg' |'md' | 'sm' | 'fullscreen' | 'inline' | {
        width: number; height: number
    };

    callback?(): any;

}

// Notifier
export interface NotifierProps {

    children?: React.ReactNode;

    lg?: boolean;

    className?: string;
    dataVal?: any;
    style?: any;

}

// Pie Chart
export interface PieChartHolderProps {

    children?: React.ReactNode;

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

    children?: React.ReactNode;

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

    children?: React.ReactNode;

    pos: 'l' | 'r';

    className?: string;
    style?: any;

}

export interface SidebarTitleProps {

    children?: React.ReactNode;

    className?: string;
    style?: any;

}

export interface SidebarContentProps {

    children?: React.ReactNode;

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

    children?: React.ReactNode;

    hasInfo?: boolean;
    hasIcon?: boolean;

    className?: string;
    style?: any;

}

export interface StepsItemProps {

    children?: React.ReactNode;

    onClick?: React.ReactEventHandler;

    active?: boolean;

    infoText?: string;
    tooltipText?: string;

    className?: string;
    style?: any;

}

// Tab
export interface TabHolderProps {

    children?: React.ReactNode;

    accordion?: boolean;
    noease?: boolean;

    className?: string;
    dataClasses?: string;
    style?: any;

}

export interface TabContentProps {

    children?: React.ReactNode;

    open?: boolean;

    className?: string;
    style?: any;

}

// Table
export interface TableProps {

    children?: React.ReactNode;

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

    children?: React.ReactNode;

    className?: string;
    style?: any;

}

export interface TableFluidProps {

    children?: React.ReactNode;

    className?: string;
    style?: any;

}

// Timeline
export interface TimelineProps {

    children?: React.ReactNode;

    left?: boolean;
    hide?: 'lines' | 'h-lines';

    className?: string;
    style?: any;

}

export interface TimelineItemProps {

    children?: React.ReactNode;

    onClick?: React.ReactEventHandler;

    align?: 'l' | 'r';

    className?: string;
    style?: any;

}