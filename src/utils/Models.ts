import { ReactNode, ElementType } from 'react';

// App
export interface HeaderLinksProps {
    name: string;
    to: string;
}

// Home
export interface ExamplesProps {
	name: string;
	to: string;
	img: string;
}

// Svg Icons
export interface SizeListProps {
	name: string;
	size: string;
	selected: boolean;
}

export interface IconsListProps {
	category: string;
	icons: string[];
}

export interface SocialLinksProps {
    title: string;
    url: string;
    icon: ElementType;
}

// Page Header
export interface PageHeaderProps {
    pageTitle: string;
}

// Page Nav
export interface MenuListProps {
    name: string;
    to: string;
    sep: boolean;
}

// Page Title
export interface PageTitleProps {
    title: string;
    children: ReactNode;
}

// code
export interface CodeProps {
    type: 'react' | 'js' | 'css';
    indSize: number;
    value: string;
    className?: string;
    style?: any;
}

// Preview
export interface ColorsProps {
	name: string;
	theme: string;
	color: string;
}

export interface PreviewProps {
	children?: ReactNode,
	type: 'react' | 'js' | 'css';
	value: string;
	indSize: number;
	actions: {
		theme?: string;
		style?: string;
	};
	themes: ColorsProps[];
}

export interface ShowColorProps {
	name: string;
	theme?: string;
}

// Store Provider
export interface StoreProviderProps {
    children: ReactNode;
}

// Storages
export interface SetStorageProps {
	name: string;
	value: any;
	jsonData?: boolean;
}

export interface GetStorageProps {
	name: string;
	jsonData?: boolean;
}

// Store reducer
export interface ComponentProps {
	theme: string;
	style: string;
}

export interface ReducerStateProps {
    calendar: ComponentProps;
}

export interface ReducerActionProps {
    type: string;
    theme?: string;
    style?: string;
    size?: string;
}