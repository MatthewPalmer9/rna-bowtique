import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {

    let history = useHistory();

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
                                <a className="nav-link active" aria-current="page" href="#">Shop</a>
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
                                0 Items / $0.00
                                <i className="fas cart fa-shopping-cart"></i>
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
