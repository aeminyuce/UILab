import * as React from 'react';
import { useReducer } from 'react';

// utils
import { StoreContext, StoreReducer, StoreInitials } from '@utils/StoreReducer';

interface StoreProviderProps {
    children: React.ReactNode;
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