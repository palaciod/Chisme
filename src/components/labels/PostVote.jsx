import React from "react";
import ScoreLabel from "./ScoreLabel";
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from "@material-ui/core";
import PostModel from "../../models/PostModel";
import { indigo } from "@material-ui/core/colors";
const useStyles = () => ({
    section:{
        padding:"20px",
    },
    score:{
        paddingLeft:"38px"
    },
    arrow:{
        fontSize:"60px"
    }
});

class PostVote extends React.Component {
    constructor(){
        super();
        this.state = {
            vote: 0
        }
    }
    
    // Sould turn into a functional component...
    render(){
        const {classes,scope} = this.props;
        return(
            <div className={classes.section}>
                <IconButton id={1} onClick={(event) => {scope.vote(event.currentTarget.id)}} style={scope.state.vote === 1 ? {color: "purple"} : {color: "Gainsboro"}}>
                    <ExpandLessRoundedIcon className={classes.arrow} />
                </IconButton>
                <ScoreLabel score={scope.state.score} classStyles={classes.score}/>
                <IconButton id={-1} onClick={(event) => scope.vote(event.currentTarget.id)} style={scope.state.vote === -1 ? {color: "red"} : {color: "Gainsboro"}}>
                    <ExpandMoreRoundedIcon className={classes.arrow} />
                </IconButton>
            </div>
        );
    }
}

const WithStylesPostVote = withStyles(useStyles)(PostVote);

export default WithStylesPostVote;