import axios from "axios";
import { AuthContext } from '../context/authContext';
import React, { useContext, useEffect } from 'react'

export default function Home() {

    const { products, setProducts } = useContext(AuthContext);

    const url = `${import.meta.env.VITE_API_URL}/home`;

    useEffect(() => {
        const promise = axios.get(url);
        promise.then(response => {
            setProducts(response.data);
        })
        promise.catch(err => {
            console.log(err.response);
        });
    }, []);
};



