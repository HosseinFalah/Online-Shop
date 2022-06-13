import React, { useReducer, createContext } from 'react';

const initialState = {
    seletedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.seletedItems.find(item => (item.id === action.payload.id))) {
                state.seletedItems.push({...action.payload, quantity: 1});
            }

            return {...state, seletedItems: [...state.seletedItems]};
        case "REMOVE_ITEM": {
            const newSeletedItems = state.seletedItems.filter(item => item.id !== action.payload.id);
            return {...state, seletedItems: [...newSeletedItems]};
        }

        case "INCREASE": {
            const findProductINC = state.seletedItems.findIndex(product => product.id === action.payload.id);
            state.seletedItems[findProductINC].quantity++;
            return {...state}
        }

        case "DECREASE": {
            const findProductDEC = state.seletedItems.findIndex(product => product.id === action.payload.id);
            state.seletedItems[findProductDEC].quantity--;
            return {...state}
        }

        case "CHECKOUT": {
            return {
                seletedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            }
        }

        case "CLEAR": {
            return {
                seletedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false,
            }
        }

        default: {
            return state;
        }
    }
}

export const cartContext = createContext()

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    return (
        <cartContext.Provider value={{state, dispatch}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider