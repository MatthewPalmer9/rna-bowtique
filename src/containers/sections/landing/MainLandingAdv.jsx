import React from 'react';
import { useHistory } from 'react-router-dom';
import kidsIMG from '../../../imgs/kids.png';

export default function MainLandingAdv() {

    const history = useHistory();

    const redirectToShop = e => {
        e.preventDefault();
        history.push("/shop");
    }
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="white-bg container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={kidsIMG} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they're gone!</h1>
                    <p className="mb-8 leading-relaxed">Sales are only for 48 hours. Don't miss out on the best deals!</p>
                    <div className="move-to-middle flex justify-center">
                        <button onClick={redirectToShop} className="inline-flex text-white bg-pink-300 border-0 py-2 px-6 focus:outline-none hover:bg-pink-400 rounded text-lg">Shop Now</button>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
