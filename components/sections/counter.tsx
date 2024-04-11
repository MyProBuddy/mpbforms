"use client";

import React from 'react';
import CountUp from 'react-countup';


const Counter = () => {
    return (
        <div className="flex bg-[#5F248E] py-6 justify-center">
            <div className="flex justify-between flex-wrap w-4/5">
            <div className="w-[150px] py-4">
                <h1 className="text-4xl font-bold text-center"><CountUp end={103} /></h1>
                <p className="py-2 font-bold text-center">Schemes Available </p>
            </div>
            <div className="w-[150px] py-4">
                <h2 className="text-4xl font-bold text-center"><CountUp end={82} /> L</h2>
                <p className="py-2 font-bold text-center">Avg Deal Size</p>
            </div>
            <div className="w-[150px] py-4">
                <h2 className="text-4xl font-bold text-center"><CountUp end={7000} />+</h2>
                <p className="py-2 font-bold text-center">Happy Customers</p>
            </div>
            <div className="w-[150px] py-4">
                <h2 className="text-4xl font-bold text-center"><CountUp end={91.8} decimals={1}/>%* </h2>
                <p className="py-2 font-bold text-center">Success rate</p>
            </div>
        </div>
        </div>
    );
};

export default Counter;