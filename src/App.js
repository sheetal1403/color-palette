import React, { useState, useCallback } from 'react';
import './App.css';
import Palette from './Palette/Palette';
import Control from './Control/Control';

function App() {

  const [colors, setcolors] = useState(0)
  const [selectedColor, setSelectedColor] = useState();


  const generateHandler = (value) => {
    setcolors(value);
  }

  const clearHandler = () => {
    setcolors(0);
    setSelectedColor('');
  }

  const onClick = useCallback((red,green,blue) => {
    //Convert to hex
    const color = convertToHex(red) + convertToHex(green) + convertToHex(blue);
    setSelectedColor(color)
  },[])

  const convertToHex = (colorNumber) => {
    var hex = Number(colorNumber).toString(16)
    return hex.length === 1 ? '0'+hex : hex
  }
  

  return (
    <div className="Main">
      <Palette colors={colors} onClick={onClick}/>
      <Control generate={generateHandler} clear={clearHandler} color={selectedColor}/>
    </div>
  );
}

export default App;
