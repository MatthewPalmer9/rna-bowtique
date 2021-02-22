export function handleCart(product){
    console.log("CART FUNCTION", product)
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_CART',
            product
        })
    }
}