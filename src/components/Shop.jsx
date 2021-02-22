import React, {useState} from 'react';
import ShopItem from './ShopItem.jsx';
import { products } from './inventory.js';
import '../styles/shop.css';
import { connect } from 'react-redux';
import { handleCart } from '../actions/handleCart.js';

export default function Shop(props) {

    const [cart, addToCart] = useState([])

    const onAddToCart = e => {
        if(!cart.includes(products[e.target.id - 1])) {
            addToCart(state => [...state, products[e.target.id - 1]]);
            e.target.disabled = true;
        } else {
            console.log("Already there.")
        }
    };

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
                                        onAddToCart={onAddToCart}
                                    />
                            )
                        })};

                    </div>
                </div>
            </section>
        </div>
    )
}
