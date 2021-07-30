import React from "react";
import Avatar from '@material-ui/core/Avatar';
function AvatarSelection(props){
    const {classStyles, avatarStyles, initials} = props;
    return(
        <div className={classStyles}>
            <Avatar className={avatarStyles}>{initials}</Avatar>
        </div>
    );
}

export default AvatarSelection;