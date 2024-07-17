import { useState } from "react";

const StrengthBar = () => {
    const [strength, setStrength] = useState(0);
    const colors = [`gray`, `red`, `orange`, `green`]

    setTimeout(() => {
        setStrength(3);
    }, 100);

    return <div className='strength-bar'>
        <div className='bar-container'>
            <div style={{ backgroundColor: colors[strength] }} className={`bar ${strength >= 1 ? `filled` : ''}`}></div>
        </div>
        <div className='bar-container'>
            <div style={{ backgroundColor: colors[strength] }} className={`bar ${strength >= 2 ? `filled` : ''}`}></div>
        </div>
        <div className='bar-container'>
            <div style={{ backgroundColor: colors[strength] }} className={`bar ${strength >= 3 ? `filled` : ''}`}></div>
        </div>
    </div>
}

export default StrengthBar