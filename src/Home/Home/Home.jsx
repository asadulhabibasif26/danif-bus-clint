import React from 'react';
import Banner from '../Banner/Banner';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import PopularRoute from './PopularRoute/PopularRoute';
import HowItWorks from '../HowItWorks/HowItWorks';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <WhyChooseUs></WhyChooseUs>
           <PopularRoute></PopularRoute>
           <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;