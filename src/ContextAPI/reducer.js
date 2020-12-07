export const intialState = {
    basket: [],
    user: null
}

export const getBasketTotal = (basket) =>
    basket?.reduce((acc, item) => item.price + acc, 0)


export default function reducer(state = intialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case 'REMOVE_FROM_BASKET':
            const newBasket = [...state.basket]
            const index = state.basket.findIndex((item) => (
                item.id === action.payload
            ))
            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        default:
            return state;
    }
}
