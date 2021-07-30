import React from "react";
import GeneralForm from "../GeneralForm";
import {makeStyles} from "@material-ui/core";
import PostModel from "../../../models/PostModel";
const useStyles = makeStyles((theme) => ({
    outerStyles:{
        width:"600px",
        borderColor:"#CF9FFF",
        borderStyle:"solid",
        borderWidth:"2px",
        margin:"auto",
        padding:"30px"
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
}));

const fields = [["textfield","Title"], ["multiLineTextField","New Post"], ["button", "POST", post]];

function post(scope){
    const title = scope.state['Title'];
    const post = scope.state['New Post'];
    const {long, lat} = scope.props.currentLocation.currentLocation;
    const {accessToken} = scope.props.accessToken;
    const {currentUser} = scope.props.currentUser;
    console.log(accessToken);
    PostModel.newPost(title, post, currentUser.data._id, long, lat, accessToken);
    window.location.reload();
}

function NewPostForm(){
    const classes = useStyles();
    return(
        <div>
            <GeneralForm maxCharLength={"1500"} rows={5} fields={fields} innerStyles={classes.innerStyles} outerStyles={classes.outerStyles} submitStyles={classes.submitStyles} outerSubmitStyles={classes.outerSubmitStyles}   buttonGroupStyles={classes.buttonGroupStyles} direction={"left"}/>
        </div>

    );
}

export default NewPostForm;