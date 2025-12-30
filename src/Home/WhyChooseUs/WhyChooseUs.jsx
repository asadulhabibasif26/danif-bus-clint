import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

const WhyChooseUs = () => {
    return (
        <div className='min-h-[500px] w-10/12 bg-white/10 mt-10 mx-auto rounded-xl px-5 py-5'>
            <h2 className='text-center text-4xl font-bold pb-5'>Why Choose Us</h2>
            <hr />
            <div className='mt-3 grid lg:grid-cols-3 grid-cols-1'>
                <div className='text-center'>
                    <h2 className='flex justify-center text-7xl text-green-400 '><VscWorkspaceTrusted /></h2>
                    <h2 className='mt-2 font-bold text-xl'>Secure & Trusted</h2>
                    <p className='mt-2 text-[15px] text-white/80'>We ensure safe and secure transactions through reliable payment gateways and verified bus operators, giving you complete peace of mind while booking.</p>
                </div>
                <div className='text-center'>
                    <h2 className='flex justify-center text-7xl text-green-400 '><FaCheckCircle /></h2>
                    <h2 className='mt-2 font-bold text-xl'>Easy & Fast Booking</h2>
                    <p className='mt-2 text-[15px] text-white/80'>Search routes, select seats, and confirm your ticket within minutes using our simple and user-friendly booking process.</p>
                </div>
                <div className='text-center'>
                    <h2 className='flex justify-center text-7xl text-green-400 '><MdOutlineSupportAgent /></h2>
                    <h2 className='mt-2 font-bold text-xl'>24/7 Customer Support</h2>
                    <p className='mt-2 text-[15px] text-white/80'>Our dedicated support team is available around the clock to assist you with bookings, cancellations, and any travel-related queries.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;