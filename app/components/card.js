import React from 'react';
import Socials from './socials';

const Card = () => {
    const cardStyle = {
        width: '300px',
        height: '200px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
    };

    return (
        <div style={cardStyle}>
            <h2>Card Title</h2>
            <p>This is a blurred card example.</p>
            <Socials/>
        </div>
    );
};

export default Card;