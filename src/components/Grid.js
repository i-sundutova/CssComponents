import React from 'react';


const Grid = (props) => {
    return (
        <div className="page">
            <h1>Grid</h1>

            <div className="row">
                <div className="col xs12 md7" style={{backgroundColor: 'brown'}}>Hello</div>
                <div className="col xs12 md5" style={{backgroundColor: 'blue'}}>Hello</div>
            </div>
        </div>
    )
}

export default Grid;