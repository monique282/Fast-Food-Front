
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../context/authContext';

export default function Home() {
  
    const {products, setProducts } = useContext(AuthContext);
   
    useEffect(() => {
        
    }, []);

    return (
        <>
        ola tudo mundo
        </>
    )
};

