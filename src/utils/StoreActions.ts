import { useContext } from 'react';

// utils
import { StoreContext, actions } from '@utils/StoreReducer';

export const StoreActions = () => {

    const { store, setStore } = useContext(StoreContext);

    // themes
    const calendarTheme = store?.calendar?.theme;

    const setCalendarTheme = (name: string) => {
        setStore({ type: actions.themes.calendar, theme: name })
        return name;
    }

    // styles
    const calendarStyle = store?.calendar?.style;

    const setCalendarStyle = (name: string) => {
        setStore({ type: actions.styles.calendar, style: name })
        return name;
    }

    // icons
    const iconSize = store?.iconSize;

    const setIconSize = (size: string) => {
        setStore({ type: actions.iconSize, size: size })
        return size;
    }

    const iconCopy = store?.iconCopy;

    const setIconCopy = (name: string) => {
        setStore({ type: actions.iconCopy, copy: name });
        return name;
    }

    return {
        // themes
        calendarTheme, setCalendarTheme,

        // styles
        calendarStyle, setCalendarStyle,

        // icons
        iconSize, setIconSize, iconCopy, setIconCopy,
    }
}