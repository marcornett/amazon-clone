import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext()

export const StateProvider = ({ reducer, intialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </StateContext.Provider>
)

// Provide state to components
export const useStateValue = () => useContext(StateContext)