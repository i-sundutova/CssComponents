import React from 'react';


const Alerts = (props) => {
    return (
        <div className="page">
            <h1>Alerts</h1>

            <div className="alert success md">Yeah! We did it!</div>

            <div className="alert info md">Info! We did it!</div>

            <div className="alert warning md">Attention! We did it!</div>

            <div className="alert error md">Oops! We did it!</div>
        </div>
    )
}

export default Alerts;