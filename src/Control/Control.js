import React, { useState } from 'react'
import './Control.css';

const Control = (props) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChangeHandler = (e) => {
       setinputValue(e.target.value)
    }

    const clear = () => {
        setinputValue('')
        props.clear();
    }


   
        return(
            <div className="ControlsContainer">
                <h1>Config Panel</h1>
                <input type="number" onChange={onInputChangeHandler} value={inputValue} className="Input"/>
                <button onClick={() => props.generate(inputValue)} className="Generate">Generate</button>
                <button onClick={clear} className="Clear">Clear</button>

                {props.color ? <div className="SelectedColor">
                                    <h2>Selected :</h2>
                                    <hr/>
                                    <div style={{width: '100px', height: '100px', backgroundColor: '#' + props.color, margin: 'auto'}}>
                                    </div> 
                                    <p>{"#"+props.color.toUpperCase()}</p>
                

                </div>: null}

            </div>
            
        )
        
    
}

export default Control