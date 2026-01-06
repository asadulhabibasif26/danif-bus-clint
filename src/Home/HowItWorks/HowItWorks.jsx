import React from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import { MdAirlineSeatReclineExtra, MdOutlineModeOfTravel } from 'react-icons/md';

const HowItWorks = () => {
    return (
        <div className='mt-10 w-8/12 mx-auto bg-white/10 rounded-xl p-10 min-h-[200px] '>
            <h2 className='text-center font-bold text-3xl pb-2'>How It Works</h2>
            <hr />
            <div className='grid md:grid-cols-3 grid-cols-1 mt-5'>
                <div className='text-center font-bold'>
                    <FaSearchLocation className='text-green-200 text-4xl mx-auto'/>
                    <h2>Search Bus</h2>
                </div>
                <div className='text-center font-bold'>
                    <MdAirlineSeatReclineExtra className='text-green-200 text-4xl mx-auto'/>
                    <h2>Choose Seat</h2>
                </div>
                <div className='text-center font-bold'>
                    <MdOutlineModeOfTravel className='text-green-200 text-4xl mx-auto'/>
                    <h2>Pay & Travel</h2>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;