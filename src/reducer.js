export const intialState = {
    basket: [],
}

export default function reducer(state = intialState, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case 'REMOVE_FROM_BASKET':
            // remove from basket array
            break;
        default:
            return state;
    }
}
