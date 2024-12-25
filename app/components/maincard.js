"use client";

import React, { useState } from 'react';
import Header from './header';
import Image from 'next/image';
import Socials from './socials';
import PlayButton from './Playbutton';

const Maincard = () => {
    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { offsetWidth, offsetHeight } = currentTarget;
        const x = (clientX / offsetWidth) * 2 - 1;
        const y = (clientY / offsetHeight) * 2 - 1;
        setStyle({
            transform: `rotateY(${x * 10}deg) rotateX(${y * -10}deg)`
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'rotateY(0deg) rotateX(0deg)',
            transition: 'transform 0.5s ease'
        });
    };

    return (
        <div 
            className={`relative px-4 py-8 pb-20 md:px-10 md:pb-40 bg-[#FCF7F4] w-[90%] md:w-11/12 h-auto md:h-[680px] flex flex-col items-center rounded-xl gap-8 overflow-hidden`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={style}
        >
            <Header />
            
            <div className='w-full flex flex-col justify-center items-center leading-none'>
                <h1 className="uppercase leading-none jolly-lodger-regular text-5xl md:text-[135px] tracking-wider">
                    merry christmas
                </h1>
                <p className="text-[#121212] jolly-lodger-regular text-3xl md:text-6xl leading-none">To you all❤</p>

                <div className='pt-4'>
                    <PlayButton />
                </div>
                
            </div>

            <div className='flex w-full justify-center'>
                <div className='flex flex-col justify-center text-center items-center leading-none'>
                    <Image 
                        src="/santa.png" 
                        alt="Santa" 
                        width={200} 
                        height={100} 
                        className="hidden md:block"
                    />
                </div>
            </div>

            <div className='absolute bottom-4 left-4'> 
                <Socials />
            </div>

            <div className='absolute bottom-4 right-4'>
                <p className='text-[#121212] jolly-lodger-regular text-lg'>
                    Made with ❤ by TheCode
                </p>
            </div>
        </div>
    );
}

export default Maincard;