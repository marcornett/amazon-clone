export const intialState = {
    basket: [
        {
            id: "9482958",
            title: "All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal",
            price: 12.99,
            rating: 5,
            image: "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MjA4OGQ5Mjkt/MjA4OGQ5Mjkt-MTI3MjNkYjEt-w379._SY304_CB404645652_.jpg"
        },
        {
            id: "9482958",
            title: "All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal",
            price: 12.99,
            rating: 5,
            image: "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MjA4OGQ5Mjkt/MjA4OGQ5Mjkt-MTI3MjNkYjEt-w379._SY304_CB404645652_.jpg"
        }
    ],
}

export default function reducer(state = intialState, action) {
    switch (action.type) {
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
        default:
            return state;
    }
}
