import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [id, setId] = useState();
    const [showReview, setShowReview] = useState(false);
    const [counter, setCounter] = useState(1);
    const [order, setOrder] = useState([]);
    const [showPayment, setShowPayment] = useState(false);
    const [nameClient, setNameClient] = useState("");
    const [code, setCode] = useState([]);
    const [baconSelected, setBaconSelected] = useState(false);
    const [cheddarSelected, setCheddarSelected] = useState(false);
    const [sauceSelected, setSauceSelected] = useState(false);
    const [observationText, setObservationText] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [showRequest, setShowRequest] = useState([]);

    return (
        <AuthContext.Provider value={{
            products, setProducts,
            id, setId,
            showReview, setShowReview,
            counter, setCounter,
            order, setOrder,
            showPayment, setShowPayment,
            nameClient, setNameClient,
            code, setCode,
            baconSelected, setBaconSelected,
            cheddarSelected, setCheddarSelected,
            sauceSelected, setSauceSelected,
            observationText, setObservationText,
            showSuccess, setShowSuccess,
            showRequest, setShowRequest
        }}>
            {children}
        </AuthContext.Provider>
    )
};
