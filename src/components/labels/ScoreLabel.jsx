import React from "react";

function ScoreLabel(props){
    const {classStyles} = props;
    return(
        <div className={classStyles}>
            {props.score}
        </div>
    );
}

export default ScoreLabel