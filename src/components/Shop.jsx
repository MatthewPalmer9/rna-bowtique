import React, {useState} from 'react';
import ShopItem from './ShopItem.jsx';
import { products } from './inventory.js';
import '../styles/shop.css';
import { connect } from 'react-redux';
import { handleCart } from '../actions/handleCart.js';

export function Shop(props) {

    return (
        <div className="shop-container">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {products.map((product, index) => {
                            return ( 
                                    <ShopItem 
                                        key={index}
                                        product={product}
                                    />
                            )
                        })};
                    </div>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, {handleCart})(Shop)
