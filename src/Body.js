import React from 'react';
import Result from './Result';

const Body = ({numberOfElements}) => {
    const computation = (value) => {
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += Math.sin(Math.sqrt(value * i)) / Math.log(value + 1);
        }
        return result;
    }

    const results = Array.from({length: numberOfElements}, (v, i) => (
        <Result key={i} index={i} computation={computation} />));

    return (
        <>
            <h1>Results</h1>
            <main>{results}</main>
        </>
    );
}

export default Body;