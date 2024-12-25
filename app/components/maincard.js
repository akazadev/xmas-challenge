"use client";

import React from 'react';
import Header from './header';
import Image from 'next/image';

const Maincard = () => {
    return (
        <div className={`relative px-4 py-8 pb-20 md:px-10 md:pb-40 bg-[#FCF7F4] w-full md:w-11/12 h-auto md:h-[680px] flex flex-col items-center rounded-xl gap-8 overflow-hidden`}>
            <Header />
            
            <div className='w-full flex flex-col justify-center items-center leading-none'>
                <h1 className="uppercase leading-none font-anton text-4xl md:text-[135px] tracking-wider">merry christmas</h1>
                <p className="text-[#121212] jolly-lodger-regular text-xl md:text-6xl leading-none">To you all❤</p>
            </div>

            <div className='w-full flex flex-col justify-center items-center leading-none'>
                <Image 
                    src="/santa.png" 
                    alt="Santa" 
                    width={230} 
                    height={250} 
                    className="md:w-[460px] md:h-[500px]"
                />
            </div>
        </div>
    );
}

export default Maincard;