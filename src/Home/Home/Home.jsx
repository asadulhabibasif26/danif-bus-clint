import React from 'react';
import Banner from '../Banner/Banner';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import PopularRoute from './PopularRoute/PopularRoute';
import HowItWorks from '../HowItWorks/HowItWorks';
import Reviews from '../Reviews/Reviews';

const reviewPromise = fetch('/Review.json').then(res => res.json());

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <WhyChooseUs></WhyChooseUs>
           <PopularRoute></PopularRoute>
           <HowItWorks></HowItWorks>
           <Reviews reviewPromise={reviewPromise}></Reviews>
        </div>
    );
};

export default Home;