import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/landing.css';

import HeaderMsg from './sections/landing/HeaderMsg.jsx';
import DealSection from './sections/landing/DealSection.jsx';
import MainLandingAdv from './sections/landing/MainLandingAdv.jsx';

export default function Landing() {
    const history = useHistory();

    const redirectToShop = e => {
        e.preventDefault();
        history.push("/shop");
    };

    return (
        <>
            <div className="landing-container">
                <HeaderMsg />
                <MainLandingAdv />
                <DealSection />
            </div>
        </>
    )
}
