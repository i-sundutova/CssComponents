import React from 'react';


const Grid = (props) => {
    return (
        <div className="page">
            <h1>Grid</h1>

            <div className="row">
                <div className="col xs12 md7" style={{backgroundColor: '#bae0bc'}}>Hello</div>
                <div className="col xs12 md5" style={{backgroundColor: '#b5beff'}}>Hello</div>
            </div>

            <div className="row">
                <div className="col xs12 md3" style={{backgroundColor: '#bae0bc'}}>Hello</div>
                <div className="col xs12 md3" style={{backgroundColor: '#b5beff'}}>Hello</div>
                <div className="col xs12 md6" style={{backgroundColor: '#ffca6a'}}>Hello</div>
            </div>
        </div>
    )
}

export default Grid;