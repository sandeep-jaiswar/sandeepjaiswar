import React from 'react';
import "../../styles/_home.scss";
import Moon from '../Moon/Moon';

function Home() {
    const createArray = (m, n) => {
        let arr = new Array(m + 1);
        return arr.join(n).split('').map((value) => parseInt(value, 10));
    }
    let ele = createArray(9222, 0);
    return (
        <div className='home_container'>
            {ele.map((cur) => (
                <span></span>
            ))}
            <Moon />
        </div>
    )
}

export default Home
