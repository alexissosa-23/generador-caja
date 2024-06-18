import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
import './App.css';

function App() {
    const [boxes, setBoxes] = useState([]);

    const addNewBox = (newBox) => {
        setBoxes([...boxes, newBox]);
    };

    return (
        <div className="App">
            <BoxForm onNewBox={addNewBox} />
            <BoxDisplay boxes={boxes} />
        </div>
    );
}

export default App;
