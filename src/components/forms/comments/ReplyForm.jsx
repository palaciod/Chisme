import React from "react";
import GeneralForm from "../GeneralForm";
import {withStyles} from "@material-ui/core";
import CommentModel from "../../../models/CommentModel";

const useStyles = () => ({
    outerStyles:{
        width:"1000px",
        borderColor:"#CF9FFF",
        borderStyle:"solid",
        borderWidth:"2px",
        margin:"auto",
        
    },
    innerStyles:{
        padding:"20px",
        paddingTop:"10px"
    },
    submitStyles:{
        padding:"50px",
        color:"white"
    },
    outerSubmitStyles:{
        padding:"20px",
        marginBottom:"30px"
    },
    buttonGroupStyles: {
        padding:"20px"
    }
});


class ReplyForm extends React.Component{

    reply = (scope) => {
        const {postId} = this.props;
        const comment = scope.state['What are your thoughts?'];
        const {accessToken} = scope.props.accessToken;
        const {currentUser} = scope.props.currentUser;
        CommentModel.postComment(postId, currentUser.data._id, comment, accessToken);
        scope.forceUpdate();
    }

    render(){
        const {classes} = this.props;
        const fields = [["multiLineTextField","What are your thoughts?"], ["button", "REPLY", this.reply]];
        return(
            <div style={{width:"inherit"}}>
                <GeneralForm maxCharLength={"1500"} rows={5} fields={fields} innerStyles={classes.innerStyles} outerStyles={classes.outerStyles} submitStyles={classes.submitStyles} outerSubmitStyles={classes.outerSubmitStyles}   buttonGroupStyles={classes.buttonGroupStyles} direction={"left"}/>
            </div>
        );
    }
}

const withStyleReplyForm = withStyles(useStyles)(ReplyForm);

export default withStyleReplyForm;