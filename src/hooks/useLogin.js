import React from 'react';
import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'

// Firebase imports
import { auth } from "../services/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()

    const login = (email, password) => {
        setError(null)
        return signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                dispatch({ type: 'LOGIN', payload: res.user })
                return true;
            })
            .catch((err) => {
                setError(err.message);
                return false;
            })
    }

    return { error, login };
}
