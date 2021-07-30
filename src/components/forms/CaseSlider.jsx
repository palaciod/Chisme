import React from "react";
import RangeSlider from "../inputs/Slider";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    section:{
        padding:"30px"
    },
    header:{
        fontSize:"18px"
    },
    subHeader:{
        float:"right",
        color:"#899499"
    },
    slider:{
        paddingTop:"45px"
    }
}));

function CaseSlider(props){
    const {title, scope} = props;
    const classes = useStyles();
    return(
        <div className={classes.section}>
            <div>
                <span className={classes.header}>{title + ":"}</span>
                <span className={classes.subHeader}>mi</span>
            </div>
            <div className={classes.slider}>
                <RangeSlider scope={scope}/>
            </div>
        </div>
    );
}

export default CaseSlider;