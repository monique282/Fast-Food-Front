import React, { createContext } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
const [products, setProducts] 
    return (
        <AuthContext.Provider value={{

        }}>
            {children}
        </AuthContext.Provider>
    )
};
