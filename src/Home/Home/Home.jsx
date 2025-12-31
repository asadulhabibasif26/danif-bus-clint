import React from 'react';
import Banner from '../Banner/Banner';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import PopularRoute from './PopularRoute/PopularRoute';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <WhyChooseUs></WhyChooseUs>
           <PopularRoute></PopularRoute>
        </div>
    );
};

export default Home;