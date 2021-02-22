import React from 'react'

export default function ShopItem(props) {
    const {id, src, category, title, price} = props.product;

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
                <button onClick={props.onAddToCart} id={id} className="cart-btn">Add to Cart</button>
            </div>
        </>
    )
}