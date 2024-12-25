"use client";

import React from 'react';
import Header from './header';
import Image from 'next/image';

const Maincard = () => {
    return (
        <div className={`relative px-10 py-8 pb-40 bg-[#FCF7F4] w-11/12 h-[680px] flex flex-col items-center rounded-xl gap-8 overflow-hidden`}>
            <Header />
            
            <div className='w-full flex flex-col justify-center items-center leading-none'>
                <h1 className="uppercase leading-none font-anton text-[135px] tracking-wider">merry christmas</h1>
                <p className="text-[#121212] jolly-lodger-regular text-6xl leading-none">To you all❤</p>
            </div>

            <div className='w-full flex flex-col justify-center items-center leading-none'>
                <Image 
                    src="/santa.png" 
                    alt="Santa" 
                    width={460} 
                    height={500} 
                />
            </div>
        </div>
    );
}

export default Maincard;