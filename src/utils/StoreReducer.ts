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
export const actions = {
	themes: {
		calendar: 'CALENDAR_THEME',
	},
	styles: {
		calendar: 'CALENDAR_STYLE',
	},
	icons: {
		size: 'ICON_SIZE',
		copy: 'ICON_COPY',
	}
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
		case actions.icons.size:
			setStorage({ name: actions.icons.size, value: action.size });
			return {
				...state,
				icons: {
					...state.icons,
					size: action.size,
				}
			};

		case actions.icons.copy:
			setStorage({ name: actions.icons.copy, value: action.copy });
			return {
				...state,
				icons: {
					...state.icons,
					copy: action.copy,
				}
			};
	}

}

export const StoreInitials = {
	calendar: {
		theme: getStorage({ name: actions.themes.calendar }),
		style: getStorage({ name: actions.styles.calendar }),
	},
	icons: {
		size: getStorage({ name: actions.icons.size }),
		copy: getStorage({ name: actions.icons.copy }),
	}
}