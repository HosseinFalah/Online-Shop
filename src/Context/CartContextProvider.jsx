import React, { useReducer, createContext } from 'react';

const initialState = {
    seletedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0)
    const total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
    return {itemsCounter, total}
}

const cartReducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.seletedItems.find(item => (item.id === action.payload.id))) {
                state.seletedItems.push({...action.payload, quantity: 1});
            }
            return {...state, seletedItems: [...state.seletedItems], ...sumItems(state.seletedItems)};
        case "REMOVE_ITEM": {
            const newSeletedItems = state.seletedItems.filter(item => item.id !== action.payload.id);
            return {...state, seletedItems: [...newSeletedItems], ...sumItems(state.seletedItems)};
        }

        case "INCREASE": {
            const findProductINC = state.seletedItems.findIndex(product => product.id === action.payload.id);
            state.seletedItems[findProductINC].quantity++;
            return {...state, ...sumItems(state.seletedItems)}
        }

        case "DECREASE": {
            const findProductDEC = state.seletedItems.findIndex(product => product.id === action.payload.id);
            state.seletedItems[findProductDEC].quantity--;
            return {...state, ...sumItems(state.seletedItems)}
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