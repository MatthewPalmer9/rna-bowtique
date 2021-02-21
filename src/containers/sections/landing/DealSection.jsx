import React from 'react';

export default function DealSection() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="bg-white blur-in container px-5 py-4 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Buy One, Get One Half Off!</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Buy any two outfits and get the second one half off. Use coupon: BOGOHO!</p>
                    </div>
                </div>
            </section>
        </>
    )
}
