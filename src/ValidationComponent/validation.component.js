import React from 'react';

const validationComponent = (props) => {
    let textToDisplay = '';
    if(props.textLength > 5) {
        textToDisplay = 'Text long enough!!';
    } else {
        textToDisplay = 'Text too short !!!'
    }
    return (
        <div>
            {textToDisplay}
        </div>
    );
}

export default validationComponent;
