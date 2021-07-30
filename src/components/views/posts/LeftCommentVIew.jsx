import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    section:{
        width:"inherit",
        padding:"30px",
        marginTop:"5%",
        fontSize:"20px"
    },
    time:{
        left:"0",
        color:"black",
    }
}));

function LeftCommentView(props){
    const classes = useStyles();
    const {comment} = props;
    return(
        <div className={classes.section}>
            <p>{comment.comment}</p>
            <div className={classes.time}>
                <span>{comment.date}</span>
            </div>
        </div>
    );
}

export default LeftCommentView;