import React from 'react';
import { connect } from 'react-redux';
import { handleCart } from '../actions/handleCart.js';

export function ShopItem(props) {
    const {id, src, category, title, price} = props.product;

    const handleAddToCart = e => {
        e.preventDefault()
        props.handleCart(props.product)
        console.log(props)
    }

    return (
        <>
            <div key={id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={src} />
                </a>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                    <p className="mt-1">{`$` + price + `.00`}</p>
                </div>
                <button onClick={handleAddToCart} id={id} className="cart-btn">Add to Cart</button>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleCart: (product) => {
            dispatch(handleCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopItem)
