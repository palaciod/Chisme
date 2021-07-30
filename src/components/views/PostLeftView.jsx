import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SaveButton from "../buttons/SaveButton";
const useStyles = makeStyles((theme) => ({
    section: {
        width:"inherit",
    },
    title: {
        padding:"15px"
    },
    message:{
        paddingLeft:"15px",
        marginTop:"-20px",
        overflow:"hidden",
    },
    time:{
        paddingLeft:"15px",
        paddingTop:"80px",
        color:"black",
        display:"inline-flex"
    }
}));

function LeftSide(props){
    const classes = useStyles();
    const {data, classStyles, clickListener} = props;
    return(
            <div className={classes.section} onClick={clickListener}>
                <div className={classes.title}>
                    <h2>
                        {data.title}
                    </h2>
                </div>
                <div className={classes.message}>
                    <p>
                        {data.post}
                    </p>
                </div>
                <div className={classes.time}>
                    <span>{data.date}</span>
                </div>
            </div>
    );
}

export default LeftSide;