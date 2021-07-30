import React from "react";
import {Button} from "@material-ui/core/";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        backgroundColor:"#5D3FD3",
        color:"white",
        '&:hover':{
            backgroundColor:"#BF40BF",
        }
    }
  });
function onSubmit(e,clickListener, scope, state){
    clickListener(scope);
}
function SubmitButton(props){
    const {title, clickListener, outButtonStyles, innerButtonStyles, style, scope, fields} = props;
    const classes = useStyles();
      return(
          <div>
              <Button variant="contained" onClick={(event) => {onSubmit(event,clickListener,scope,fields)}} classes={{root: classes.root}} className={innerButtonStyles} style={style}>{title}</Button>
          </div>
      );
}

export default SubmitButton;