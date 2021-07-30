import React from "react";
import {TextField} from "@material-ui/core/";
function MultiLineTextField(props){
    const { styles, title, scope, textFieldStyles, rows, maxCharLength} = props;
    return(
        <div className={styles} key={`${title}Outer`}>
            <TextField 
            rows={rows} 
            className={textFieldStyles}  
            multiline={true} id={title} 
            key={title} label={title}  
            fullWidth={true} 
            onChange={(event) => {scope.updateTextFields(title, event.target.value)}}
            inputProps={{
                maxLength: maxCharLength
            }}
            />
        </div>
    ); 
}

export default MultiLineTextField;