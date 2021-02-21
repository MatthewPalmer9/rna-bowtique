import React from 'react';
import { products } from './inventory.js';
import '../styles/shop.css';

export default function Shop(props) {

    return (
        <div className="shop-container">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        
                    {products.map((product, index) => {
                        const {src, category, title, price} = product;
                        return ( 
                            <>
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={src} />
                                    </a>
                                    <div className="mt-4">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                                        <p className="mt-1">{`$` + price + `.00`}</p>
                                    </div>
                                    <button className="cart-btn">Add to Cart</button>
                                </div>
                            </>
                        )
                    })}

                    </div>
                </div>
            </section>
        </div>
    )
}
