import { createContext } from 'react';

// utils
import { setStorage, getStorage } from '@utils/Storages';

// imports
import type { ReducerStateProps, ReducerActionProps } from './Models';

export const StoreContext = createContext({
	store: null,
	setStore: null,
});

// actions
const actions = {
	themes: {
		calendar: 'CALENDAR_THEME',
	},
	styles: {
		calendar: 'CALENDAR_STYLE',
	},
	iconSize: 'ICON_SIZE',
	iconCopy: 'ICON_COPY',
}

export const StoreReducer = (state: ReducerStateProps, action: ReducerActionProps) => {
	const theme = (key: string) => {
		setStorage({ name: actions.themes[key], value: action.theme });
		return {
			...state,
			[key]: {...state[key], theme: action.theme }
		};
	}

	const style = (key: string) => {
		setStorage({ name: actions.styles[key], value: action.style });
		return {
			...state,
			[key]: { ...state[key], style: action.style }
		};
	}

	switch (action?.type) {
		// themes
		case actions.themes.calendar:
			return theme('calendar');

		// styles
		case actions.styles.calendar:
			return style('calendar');

		// icons
		case actions.iconSize:
			setStorage({ name: actions.iconSize, value: action.size });
			return {
				...state,
				iconSize: action.size,
			};

		case actions.iconCopy:
			setStorage({ name: actions.iconCopy, value: action.copy });
			return {
				...state,
				iconCopy: action.copy,
			};
	}

}

export const StoreInitials = {
	calendar: {
		theme: getStorage({ name: actions.themes.calendar }),
		style: getStorage({ name: actions.styles.calendar }),
	},
	iconSize: getStorage({ name: actions.iconSize }),
	iconCopy: getStorage({ name: actions.iconCopy }),
}