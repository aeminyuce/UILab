import { useContext } from 'react';

// utils
import { StoreContext } from '@utils/StoreReducer';

export const StoreActions = () => {

    const { setStore } = useContext(StoreContext);

    const iconSize = (size: string) => {
        setStore({ type: 'ICON_SIZE', size: size })
        return size;
    }

    const iconCopy = (name: string) => {
        setStore({ type: 'ICON_COPY', copy: name });
        return name;
    }

    return { iconCopy, iconSize }
}