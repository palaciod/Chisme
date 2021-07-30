import React from "react";
import { withStyles } from "@material-ui/styles";
import LeftCommentView from "./LeftCommentVIew";
import RightSide from "../PostRightView";
const useStyles = () => ({
    section: {
        width:"1250px",
        height:"250px",
        backgroundColor:"white",
        margin:"auto",
        borderRadius:"10px",
        '&:hover':{
            backgroundColor:"#FDF8FF"
        }
    },
    grid:{
        display:"inline-flex",
        width:"inherit",
        position:"relative"
    },
    rightSide:{
        position:"absolute",
        right:"0",
        marginRight:"40px",
    }
});


class CommentView extends React.Component {

    render(){
        const {classes, data, comment} = this.props;
        return(
            <div className={classes.section}>
                <div className={classes.grid} >
                    <LeftCommentView comment={comment}/>
                    {/* Right size goes here */}
                </div>
            </div>
        );
    }
}

const WithStylesCommentView = withStyles(useStyles)(CommentView);

export default WithStylesCommentView;

