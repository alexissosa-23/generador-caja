import React from 'react';
import './BoxDisplay.css';

const BoxDisplay = (props) => {
    return (
        <div className="box-container">
            {props.boxes.map((box, index) => (
                <div 
                    key={index} 
                    className="box" 
                    style={{ 
                        backgroundColor: box.color, 
                        width: `${box.size}px`, 
                        height: `${box.size}px`
                    }} 
                ></div>
            ))}
        </div>
    );
};

export default BoxDisplay;
