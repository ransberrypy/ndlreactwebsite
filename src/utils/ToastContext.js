import React, { createContext, useRef } from 'react';
import { Toast } from 'primereact/toast';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const toast = useRef(null);

    return (
        <ToastContext.Provider value={toast}>
            <Toast ref={toast} />
            {children}
        </ToastContext.Provider>
    );
};
