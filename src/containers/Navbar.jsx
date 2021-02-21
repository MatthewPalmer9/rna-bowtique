import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {

    let history = useHistory();

    const redirectToShop = e => {
        e.preventDefault();
        history.push("/shop");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-pink fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">R&amp;A Boutique</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a onClick={redirectToShop} className="nav-link active" aria-current="page" href="">Shop</a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Special Deals</a>
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Inventory</a>
                    </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
