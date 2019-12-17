import React from 'react';

const charComponent = (props) => {
    return (<div className="Character" onClick={props.click}>{props.character}</div>);
}

export default charComponent;
