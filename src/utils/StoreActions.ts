import { useContext } from 'react';

// utils
import { StoreContext } from '@utils/StoreReducer';

export const StoreActions = () => {

    const { store, setStore } = useContext(StoreContext);

    const iconSize = store.iconSize;

    const setIconSize = (size: string) => {
        setStore({ type: 'ICON_SIZE', size: size })
        return size;
    }

    const iconCopy = store.iconCopy;

    const setIconCopy = (name: string) => {
        setStore({ type: 'ICON_COPY', copy: name });
        return name;
    }

    return {
        // icons
        iconSize, setIconSize,
        iconCopy, setIconCopy,
    }
}