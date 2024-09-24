import * as React from 'react';
import { useReducer, ReactNode } from 'react';

// utils
import { StoreContext, StoreReducer, StoreInitials } from '@utils/StoreReducer';

interface StoreProviderProps {
    children: ReactNode;
}

export default function StoreProvider(

    { children }:StoreProviderProps) {

        const [store, setStore] = useReducer(StoreReducer, StoreInitials);

        return (
            <StoreContext.Provider value={{ store, setStore }}>
                {children}
            </StoreContext.Provider>
        );
    }