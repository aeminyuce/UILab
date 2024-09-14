import { createContext } from 'react';

interface ReducerStateProps {
    previewTheme: string;
}

interface ReducerActionProps {

    type: string;
    theme: string;

}

export const StoreContext = createContext({

	store: null,
	setStore: null,

});

export const StoreReducer = (state: ReducerStateProps, action: ReducerActionProps) => {
	switch (action?.type) {

        // themes
		case 'set theme': {
			return {...state, ...{ previewTheme: action.theme }};
		}
		case 'unset theme': {
			return {...state, ...{ previewTheme: null }};
		}

	}
}

export const StoreInitials = {

	// themes
	previewTheme: null,

}