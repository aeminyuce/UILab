import { createContext } from 'react';

interface ReducerStateProps {
    calendar: ComponentProps;
}

interface ComponentProps {

	theme: null;
	style: null;

}

interface ReducerActionProps {

    type: string;

    theme?: string;
    style?: string;

}

export const StoreContext = createContext({
	store: null,
	setStore: null,
});

export const StoreReducer = (state: ReducerStateProps, action: ReducerActionProps) => {
	switch (action?.type) {

        // themes
		case 'CALENDAR_THEME': {
			return {...state, ...{calendar: { theme: action.theme }}};
		}

		// styles
		case 'CALENDAR_STYLE': {
			return {...state, ...{calendar: { style: action.style }}};
		}

	}
}

export const StoreInitials = {

	// components
	calendar: { theme: null, style: null }

}