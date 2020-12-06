import React, { createContext, useContext, useReducer } from "react";

// Prepares the datalayer
export const StateContext = createContext();

// Wrap App and Provide Datalayer
export const StateProvider = ({ reducer, initialState, children }) => (<StateContext.Provider value={useReducer(reducer, initialState)}>{children}
</StateContext.Provider>
);

// Pull information from the data Layer
export const useStateValue = () => useContext(StateContext);