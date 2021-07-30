import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import LeftSide from "../../views/PostLeftView";
import RightSide from "../../views/PostRightView";
import CommentSection from "../../views/posts/CommentSectionView";
import ReplyForm from "../../forms/comments/ReplyForm";
const useStyles = makeStyles((theme) => ({
    section: {
        width:"1250px",
        height:"100%",
        backgroundColor:"white",
        margin:"auto",
        borderRadius:"10px",
        '&:hover':{
            borderColor:"#CF9FFF",
            borderStyle:"solid",
            borderWidth:"2px",
            borderRadius:"13px",
            cursor: "pointer"
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
    },
}));

function FullPostTemplate(props){
    const classes = useStyles();
    const {data, token, user, scope} = props;
    return(
        <div className={classes.section}>
            <div className={classes.grid} >
                <LeftSide data={data} />
                <RightSide scope={scope} user={user} token={token} data={data} score={data.score} classStyles={classes.rightSide}/>
            </div>
            <div className={classes.grid} style={{marginTop:"50px"}}>
                <ReplyForm postId={data.post_id}/>
            </div>
            <div className={classes.grid} style={{marginTop:"50px"}}>
                <CommentSection data={data} postId={data.post_id}/>
            </div>

            
        </div>
    );
}

export default FullPostTemplate;