import React from 'react';
import "../../styles/_home.scss";
import Moon from '../Moon/Moon';
import Typing from 'react-typing-animation';

function Home() {
    const createArray = (m, n) => {
        let arr = new Array(m + 1);
        return arr.join(n).split('').map((value) => parseInt(value, 10));
    }
    let ele = createArray(2222, 0);
    const createCharFromText = (word) => {
        return (
            <>
                {word.split('').map((cur) => (
                    <span className='letter'>{cur}</span>
                ))}
            </>
        )
    }

    return (
        <div className='home_container'>
            {ele.map((cur) => (
                <span></span>
            ))}
            <Moon />
            <Typing className='typing_container'>
                <span>{createCharFromText('Hi,')}</span><br />
                <span>{createCharFromText('I’m Sandeep,')}</span><br />
                <span>{createCharFromText('front end developer')}</span>
            </Typing>
            <img src="assets/images/down.svg" alt='downArrow' height='40' width='40' className='downarrow' id='downarrow' />
        </div>
    )
}

export default Home
