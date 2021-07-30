import React from "react";
import PostVote from "../labels/PostVote";

function RightSide(props){
    const {user, token,data, score, scope, classStyles} = props;
    return(
        <div className={classStyles}>
            <PostVote user={user} token={token} data={data} score={score} scope={scope}/>
        </div>
    );
}

export default RightSide;