const manageProducts = (state={products: []}, action) => {
    switch(action.type) {
        case 'RENDER_PRODUCTS':
            return {
                ...state, products: action.payload
            }
        default:
            return state
    }
};

export default manageProducts