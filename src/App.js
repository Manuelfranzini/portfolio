import React, { useState } from 'react';
import data from './staticDB';
import './App.css';



const Popup = ({ dataToShow, onClose }) => {
    return (
        <ul class="popup">
            <div className="popup-content">
                {Object.entries(dataToShow).map(([key, value]) => (
                    <li className="list-point" key={key}>
                        <div ><strong>{key} <br/> </strong> {Array.isArray(value) ? value.join(', ') : value}</div>
                    </li>
                ))}
                <span class="close-popup" onClick={onClose}>
                    &times;
                </span>
            </div>
        </ul>
    );
};

const App = () => {
    const [selectedData, setSelectedData] = useState(null);
    const [showButtons, setShowButtons] = useState(true);

    const handleButtonClick = (index) => {
        setSelectedData(data[index]);
        setShowButtons(false);
    };

    const handleClosePopup = () => {
        setSelectedData(null);
        setShowButtons(true);
    };

    return (
        <div>
            {showButtons && (
                <div>
                    {data.map((item, index) => (
                        <button className="button" key={index} onClick={() => handleButtonClick(index)}>
                            {item.What}
                        </button>
                    ))}
                </div>
            )}
            {!showButtons && (
                <Popup dataToShow={selectedData} onClose={handleClosePopup} />
            )}
            <div class="background-text">Manuel Franzini</div>
        </div>
    );
};

export default App;

/*
        
*/