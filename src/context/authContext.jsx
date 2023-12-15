import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
const [products, setProducts] = useState([])
    return (
        <AuthContext.Provider value={{
            products, setProducts
        }}>
            {children}
        </AuthContext.Provider>
    )
};
