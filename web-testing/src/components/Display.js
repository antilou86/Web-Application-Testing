import React from 'react';

const Display = (props) => {
    return (
    <div>
        <h2>Current At-Bat Stats:</h2>
        <div>
            <h3>Strikes</h3>
            <h4 data-testid="strike-count">{props.counts.strike}</h4>
        </div>
        <div>
            <h3>Balls</h3>
            <h4 data-testid="ball-count">{props.counts.ball}</h4>
        </div>
    </div>
    )
}

export default Display