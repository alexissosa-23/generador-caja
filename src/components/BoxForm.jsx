import React, { useState } from 'react';

const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox({ color: color, size: size });
        setColor("");
        setSize("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Color: </label>
                <input 
                    type="text" 
                    onChange={(e) => setColor(e.target.value)} 
                    value={color} 
                />
            </div>
            <div>
                <label>Size: </label>
                <input 
                    type="number" 
                    onChange={(e) => setSize(e.target.value)} 
                    value={size} 
                />
            </div>
            <input type="submit" value="Add" />
        </form>
    );
};

export default BoxForm;
