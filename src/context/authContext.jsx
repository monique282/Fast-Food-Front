import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState();
    const [showReview, setShowReview] = useState(false);
    const [counter, setCounter] = useState(1);
    const [order, setOrder] = useState([])

    return (
        <AuthContext.Provider value={{
            products, setProducts,
            id, setId,
            showReview, setShowReview, 
            counter, setCounter,
            order, setOrder
        }}>
            {children}
        </AuthContext.Provider>
    )
};
