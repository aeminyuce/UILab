import { createContext } from 'react';

// utils
import { setStorage, getStorage } from '@utils/Storages';

// imports
import type { ReducerStateProps, ReducerActionProps } from './Models';

export const StoreContext = createContext({
	store: null,
	setStore: null,
});

const themes = {
	calendar: 'CALENDAR_THEME',
}

const styles = {
	calendar: 'CALENDAR_STYLE',
}

export const StoreReducer = (state: ReducerStateProps, action: ReducerActionProps) => {

	const theme = (key: string) => {

		setStorage({ name: themes[key], value: action.theme });
		return {...state, [key]: { ...state[key], theme: action.theme }};

	}

	const style = (key: string) => {

		setStorage({ name: styles[key], value: action.style });
		return {...state, [key]: { ...state[key], style: action.style }};

	}

	console.log(state);

	switch (action?.type) {

        // themes
		case themes.calendar: return theme('calendar');

        // styles
		case styles.calendar: return style('calendar');

	}

}

export const StoreInitials = {

	// components
	calendar: {
		theme: getStorage({ name: themes.calendar }),
		style: getStorage({ name: styles.calendar }),
	}

}