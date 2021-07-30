import React from "react";
import {TextField} from "@material-ui/core/"
function CaseTextField(props){
    const {title, scope, styles} =  props;
    let type = "";
    if(title === "password") type = "password"
    if(title.includes("password")) type = "password"
    return(
        <div className={styles} key={`${title}Outer`}>
            <TextField id={title} key={title} label={title}  fullWidth={true} type={type} onChange={(event) => {scope.updateTextFields(title, event.target.value)}}/>
        </div>
    );  
}

export default CaseTextField;