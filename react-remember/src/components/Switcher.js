import React from "react";
import './Switcher.css';


 function Switcher (props) {
        const {bgColor, moodText, moodPic, changeParentBackground} = props;
        
        const cn = `switcher-container ${bgColor}`;
  
        return (
            <div className={cn}>
                <img src={moodPic} alt="My mood"/>
                <h1>I am {moodText}</h1>
                <button onClick={changeParentBackground}>Click me!</button>
            </div>
        )
    }

export default Switcher



// Три типа взаимодействия компонент
// Parent -> Child - props
// Child -> Parent - callback
// Child -> Child (Sibling) - Parent