import React from 'react'
import './Palette.css'

const Palette = React.memo((props) => {

        let colorsArray = Array(+props.colors).fill();
        colorsArray = colorsArray.map((_, index) => {
            let red = Math.floor(Math.random() * 255);
            let blue =Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            return (
                <div 
                    style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`}} 
                    className="EachColor" 
                    key={index}
                    onClick={() => props.onClick(red,green, blue)}>
                
                </div>
                
            
            )
        })


        return (
           
                    <div className="PaletteContainer">
                        <h1>Palette</h1>
                         <div className="PaletteColors">
                            {colorsArray}
                        </div>
                    </div>
                   
           
            
        )
        
    
})

export default Palette