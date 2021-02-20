import React from 'react';
import '../styles/landing.css';
import kidsIMG from '../imgs/kids.png';

export default function Landing() {
    return (
        <div>
            <div className="container">

                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <img className="img-fluid rounded mb-4 mb-lg-0" src={kidsIMG} alt="" />
                    </div>
                
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">R&amp;A Bowtique</h1>
                        <p>Your one-stop-shop for the most stylish kid's clothing.</p>
                        <a className="btn btn-warning" href="#">Take a Look!</a>
                    </div>
                </div>
                
                <div className="card text-white bg-secondary my-5 py-4 text-center">
                    <div className="card-body">
                        <p className="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p>
                    </div>
                </div>

                <div className="row">
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Card One</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary btn-sm">More Info</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                    <div className="card-body">
                        <h2 className="card-title">Card Two</h2>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary btn-sm">More Info</a>
                    </div>
                    </div>
                </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Card Three</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary btn-sm">More Info</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
