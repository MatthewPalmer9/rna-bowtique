export default function manageProducts(state={ cart: [] }, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state, cart: [...state.cart, action.product]
            }
        default:
            return state
    }
};