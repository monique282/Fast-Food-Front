import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState()
    return (
        <AuthContext.Provider value={{
            products, setProducts,
            id, setId
        }}>
            {children}
        </AuthContext.Provider>
    )
};
