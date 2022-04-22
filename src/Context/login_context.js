import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

import reducer from "../Reducers/professions_reducer";
import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGIN
} from "../Actions/actions";

import { apiBaseUrl } from "../Utils/constants";

const initialState = {
	login_response: null,
	login_error: false,
	login_loading: false,
};

const LoginContext = React.createContext();

export const LoginProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const fetchLoginAttempt =  async (url, form) => {
        dispatch({ type: LOGIN});
        try {
            const response = await axios.post(url, form );
            dispatch({ type: LOGIN_SUCCESS, payload: response.data});
        } catch(error){
            dispatch({ type: LOGIN_ERROR})
        }
    }
    return (
        <LoginContext.Provider value={{...state, fetchLoginAttempt}}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLoginContext = () => {
    return useContext(LoginContext)
}