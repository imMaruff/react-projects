import { useState } from "react";
function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')

    function randomUtilityColor(length) {
        return Math.floor(Math.random() * length);
        
    }
    function handleRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        
        for (let i = 1; i <= 6; i++) {
            hexColor += hex[randomUtilityColor(hex.length)]
        }
        setColor(hexColor); 
        console.log(hexColor);
    }

    function handleRandomRgbColor() {
        let r = randomUtilityColor(256);
        let g = randomUtilityColor(256);
        let b = randomUtilityColor(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
        console.log(`rgb(${r}, ${g}, ${b})`);
        
    }
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color
        }}>
            <button onClick={() => { setTypeOfColor('hex') }}>Create Hex color</button>
            <button onClick={() => { setTypeOfColor('rgb') }}>Create RGB color</button>
            <button onClick={typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor}>Create Random color</button>

        <div style={{
            display:"flex",
            flexDirection: 'column',
            gap:'50px'
        }}>
            <h1>{color}</h1>
            <h2>{typeOfColor === 'hex'? "HEX" : "RGB" }</h2>
        </div>
        </div>
    )
}

export default RandomColor;