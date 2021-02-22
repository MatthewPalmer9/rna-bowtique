import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/navbar.css';

export function Navbar(props) {

    let history = useHistory();
    // Grabs length of cart
    let numberOfItemsInCart = props.cart.length;

    // Grabs total price 
    let total = 0;
    let totalCost = props.cart.map(product => {
        total += product.price
    });

    const redirectToShop = e => {
        e.preventDefault();
        history.push("/shop");
    };

    const redirectToHome = e => {
        e.preventDefault();
        history.push("/");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-pink fixed-top">
                <div className="container-fluid">
                    <a onClick={redirectToHome} className="navbar-brand" href="/">R&amp;A Boutique</a>
                    <button className="black-menu navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="white-icon navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a onClick={redirectToShop}className="nav-link active" aria-current="page" href="">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Special Deals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <a className="nav-link" href="#">
                                {console.log("NAV PROPS", props)}
                                {numberOfItemsInCart} Items / ${total}.00
                                <i className="fas cart fa-shopping-cart"></i>
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Navbar)
