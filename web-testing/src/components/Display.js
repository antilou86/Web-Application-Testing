import React from 'react';

const Display = () => {
    return (
    <container>
        <h2>Current At-Bat Stats:</h2>
        <div>
            <h3>Strikes</h3>
            <h4>{props.counts.strike}</h4>
        </div>
        <div>
            <h3>Balls</h3>
            <h4>{props.counts.ball}</h4>
        </div>
    </container>
    )
}

export default Display